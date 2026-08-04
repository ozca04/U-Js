const makeImages = function Generator(shows) {
  for (let i = 0; i < shows.length; i++) {
    const showImg = shows[i].show.image; //later on put all these data in an object
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

      btn.addEventListener("click", function (e) {
        movieList.push(shows[i].show.name);
        favoriteSection.append(movieList);
      });

      card.append(img, h2, btn); // all three go INSIDE the card
      movieContainer.append(card); // the card goes in the grid
    }
  }
};

const element = {
  card: document.createElement("div"),
  img: document.createElement("img"),
  h2: document.createElement("h2"),
  btn: document.createElement("button"),
  elementcontexts() {
    this.card.className = "cell";
    this.img.src = showImg.medium;
    this.h2.textContent = showName;
    this.btn.className = "button is-white";
    this.btn.innerText = "Add";
  },
};
