// function double(n) {
//   return n * 2;
// }
// console.log(double(5));
//----------------------------------------------------------------------TASK 2---------------------------------------------------------------------------------
// function isEven(n) {
//   return n % 2 === 0;
// }
// console.log(isEven(10));
//----------------------------------------------------------------------TASK 3---------------------------------------------------------------------------------
// function sumArray(nums) {
//   let result = 0;
//   for (let i = 0; i < nums.length; i++) {
//     result = result + nums[i];
//   }
//   return result;
// }
// console.log(sumArray([1, 2, 3, 4]));
//----------------------------------------------------------------------TASK 4---------------------------------------------------------------------------------
// function findFirstBig(nums) {
//   let x = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 100) {
//       return nums[i];
//     }
//   }
//   return null;
// }
// console.log(findFirstBig([5, 50, 3]));
//----------------------------------------------------------------------TASK 5---------------------------------------------------------------------------------
// function countBig(nums) {
//   let bigNums = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 100) {
//       bigNums++;
//     }
//   }
//   return bigNums;
// }
// console.log(countBig([5, 200, 3, 400, 150]));
//----------------------------------------------------------------------TASK 6---------------------------------------------------------------------------------
// function onlyBig(nums) {
//   return nums.filter((n) => n > 100);
// }
// console.log(onlyBig([5, 200, 3, 400]));

//----------------------------------------------------------------------TASK 7---------------------------------------------------------------------------------
// function capitalizeAll(words) {
//   let newArr = [];
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     newArr[i] = word[0].toUpperCase() + word.slice(1);
//   }
//   return newArr;
// }
// //function capitalizeAll(words) {
// //return words.map((word) => word[0].toUpperCase() + word.slice(1));
// //}
// // ---------------------------SHORTER WAY WITH .MAP
// console.log(capitalizeAll(["hello", "welcome"]));
//----------------------------------------------------------------------TASK 8---------------------------------------------------------------------------------
// function sumArray(nums) {
//   let total = 0;
//   for (let i = 0; i < nums.length; i++) {
//     total = total + nums[i];
//   }
//   return total;
// }
// console.log(sumArray([5, 7, 9, 11, 34]));
//----------------------------------------------------------------------TASK 9---------------------------------------------------------------------------------
// function maxNum(nums) {
//   let numm = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     if (numm < nums[i]) {
//       numm = nums[i];
//     }
//   }
//   return numm;
// }

// console.log(maxNum([3, 9, 7, 11, 17]));
//----------------------------------------------------------------------TASK 10---------------------------------------------------------------------------------
// function minNum(nums) {
//   let result = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     if (result > nums[i]) {
//       result = nums[i];
//     }
//   }
//   return result;
// }
// console.log(minNum([5, 3, 9, 7, 11, 17]));
// ////////////////////////========Shorter Way==========////////////////////////
// function minNum(nums) {
//   return Math.min(...nums); // u need ... in order to unpack array
// }
//----------------------------------------------------------------------TASK 11---------------------------------------------------------------------------------

// function countVowels(word) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (vowels.includes(word[i])) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("hello"));
//----------------------------------------------------------------------TASK 12---------------------------------------------------------------------------------
// const person = {
//   name: "carl",
//   age: 25,
//   describe() {
//     return `${this.name} is ${this.age} years old`;
//   },
// };

// console.log(person.describe());
// //////////////////////////////////////////////////////////////////
// function describe(person) {
//   return `${person.name} is ${person.age} years old`;
// }

// console.log(describe({ name: "carl", age: 25 }));
//----------------------------------------------------------------------TASK 13---------------------------------------------------------------------------------
// function birthday(person) {
//   person.age++;
//   return person;
// }

// console.log(birthday({ name: "carl", age: 25 }));
//----------------------------------------------------------------------TASK 14---------------------------------------------------------------------------------

// function totalPrices(items) {
//   let total = 0;
//   for (let i = 0; i < items.length; i++) {
//     total += items[i].price;
//   }
//   return total;
// }

// console.log(
//   totalPrices([
//     { name: "pen", price: 5 },
//     { name: "book", price: 20 },
//     { name: "bag", price: 50 },
//   ]),
// );
//----------------------------------------------------------------------TASK 15---------------------------------------------------------------------------------
function expensiveItems(items) {
  let result = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].price > 10) {
      result.push(items[i]);
    }
  }
  return result;
}
console.log(
  expensiveItems([
    { name: "pen", price: 5 },
    { name: "book", price: 20 },
    { name: "bag", price: 50 },
  ]),
);
