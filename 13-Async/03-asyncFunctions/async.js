const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};
delayedColorChange("purple", 1000)
  .then(() => delayedColorChange("purple", 1000))
  .then(() => delayedColorChange("pink", 1000))
  .then(() => delayedColorChange("prange", 1000))
  .then(() => delayedColorChange("yellow", 1000))
  .then(() => delayedColorChange("olive", 1000));
