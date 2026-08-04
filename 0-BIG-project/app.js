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

    form.elements.query.value = "";
  } catch (e) {
    console.log(e);
  }
});

const makeImages = function Generator(shows) {
  for (let i = 0; i < shows.length; i++) {
    const showImg = shows[i].show.image;
    const showName = shows[i].show.name;
    if (showImg && showName) {
      const card = document.createElement("div"); // the wrapper
      card.className = "cell";

      const img = document.createElement("img");
      img.src = showImg.medium;

      const h2 = document.createElement("h2");
      h2.textContent = showName;

      const btn = document.createElement("button");
      btn.className = "button is-white";
      btn.innerText = "Add";

      card.append(img, h2, btn); // all three go INSIDE the card
      movieContainer.append(card); // the card goes in the grid
    }
  }
};
