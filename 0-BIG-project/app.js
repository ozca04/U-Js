const input = document.querySelector("#movieSearchBar");
const form = document.querySelector("form");
const movieContainer = document.querySelector("#movieContainer");

form.addEventListener("submit", async function (e) {
  try {
    e.preventDefault();
    const userSearch = form.elements.query.value;
    const config = { params: { q: userSearch } };
    const result = await axios.get(
      `https://api.tvmaze.com/search/shows`,
      config,
    );

    makeImages(result.data);
    makeTitle(result.data);
    form.elements.query.value = "";
  } catch (e) {
    console.log(e);
  }
});
const makeImages = function imageGenerator(shows) {
  for (let i = 0; i < shows.length; i++) {
    if (shows[i].show.image) {
      const img = document.createElement("img");
      img.src = shows[i].show.image.medium;
      document.body.append(img); //body yerine div
    }
  }
};

const makeTitle = function titleGenerator(title) {
  for (let i = 0; i < title.length; i++) {
    if (title[i].show.name) {
      const h2 = document.createElement("h2");
      h2.textContent = title[i].show.name;
      document.body.append(h2);
    }
  }
};
