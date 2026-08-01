const form = document.querySelector("#seachForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const userSearch = form.elements.query.value;
  const config = { params: { q: userSearch } };
  const response = await axios.get(
    `https://api.tvmaze.com/search/shows`,
    config,
  );

  makeImages(response.data);
  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
//try and catch should be used here
