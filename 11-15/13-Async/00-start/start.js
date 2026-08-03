//CALL STACK -->latenflip.com or console breakpoint, helps u keep track of what is going on and debug

// //
// console.log(1);
// setTimeout(() => console.log(2), 1000);
// console.log(3);
// setTimeout(() => console.log(4), 0);
// console.log(5);

// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "blue";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "orange";
//     }, 1000);
//   }, 1000);
// }, 1000);

///CALLBACK HELL
// const delayedColorChange = (newColor, delay, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     doNext();
//   }, delay);
// };

// delayedColorChange("red", 1000, () => {
//   delayedColorChange("orange", 1000, () => {
//     delayedColorChange("yellow", 1000, () => {
//       delayedColorChange("green", 1000, () => {
//         delayedColorChange("blue", 1000, () => {});
//       });
//     });
//   });
// });

// delayedColorChange("purple", 1000);
// delayedColorChange("pink", 2000);
// delayedColorChange("olive", 3000);

// searchMoveiesAPI("amadeus", () => {
//   saveToMyDB(
//     movies,
//     () => {
//       //if it works run this
//     },
//     () => {
//       //if it doesnt work run this
//     },
//   );
// });
//////////////////////////////////////
//////////////////////////////////////
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
