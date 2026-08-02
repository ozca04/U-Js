// String.prototype.yell = function () {
//   return `OOOOOOOH ${this.toUpperCase()}!!!`;
// };
// console.log("hello".yell());

// const navColor = new Color("carrot", [230, 126, 34]);
// const logoColor = new Color("emerald", [46, 204, 113]);

function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  };
  return color;
}
const firstColor = makeColor(36, 255, 211);
console.log(firstColor.rgb());
