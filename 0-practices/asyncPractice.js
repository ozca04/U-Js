// function delayedGreeting(name) {
//   const greeting = `Hello, ${name}!`;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(greeting);
//     }, 1000);
//   });
// }

// delayedGreeting("canberk").then((msg) => {
//   console.log(msg);
// });

// function tossCoin() {
//   return new Promise((resolve, reject) => {
//     const prob = Math.random();
//     if (prob < 0.1) {
//       reject("lost the coin");
//     } else if (prob < 0.5) {
//       resolve("heads");
//     } else {
//       resolve("tails");
//     }
//   });
// }

// tossCoin()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// ///////////////////////////////////////////////////////////////////
//   // async/await — flat, reads like normal top-to-bottom code
// async function getPages() {
//   try {
//     const data1 = await fakeRequestPromise("/page1");
//     console.log(data1);
//     const data2 = await fakeRequestPromise("/page2");
//     console.log(data2);
//     const data3 = await fakeRequestPromise("/page3");
//     console.log(data3);
//   } catch (err) {
//     console.log(err);
//   }
// }
// // .then — each step nests into the next, indentation creeps right
// fakeRequestPromise("/page1")
//   .then((data1) => {
//     console.log(data1);
//     return fakeRequestPromise("/page2");
//   })
//   .then((data2) => {
//     console.log(data2);
//     return fakeRequestPromise("/page3");
//   })
//   .then((data3) => {
//     console.log(data3);
//   })
//   .catch((err) => console.log(err));

// function dieMech() {
//   return new Promise((resolve, reject) => {
//     const roll = Math.floor(Math.random() * 10);
//     if (roll < 7 && roll > 0) {
//       resolve(`die rolled, number was ${roll}`);
//     } else {
//       reject(`error: number ${roll} is not on die`);
//     }
//   });
// }
// async function result() {
//   try {
//     const rollDie = await dieMech();
//     console.log(rollDie);
//   } catch (err) {
//     console.log(`${err}`);
//   }
// }
// result();
