// function checkAge(age) {
//   return age >= 18 ? "adult" : "minor";
// }
//---------------------------------------------------------------------------------------------------------------------------
// function sumEvens(nums) {
//   let result = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) {
//       result = result + nums[i];
//     }
//   }
//   return result;
// }
// console.log(sumEvens([1, 2, 3, 4, 5, 6]));
//---------------------------------------------------------------------------------------------------------------------------
// function firstNegative(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 0) {
//       return nums[i];
//     }
//   }
//   return null;
// }
// ------------------shorter---------------------
// function firstNegative(nums) {
//   return nums.find((n) => n < 0) ?? null;
// }
// //------------------------------------------------
// console.log(firstNegative([4, 7, -2, 9, -5]));
//---------------------------------------------------------------------------------------------------------------------------
// function hunder(num) {
//   return num.find((n) => n > 100) ?? null;
// }
// console.log(hunder([12, 24, 54, 77, 102, 45, 555]));
//---------------------------------------------------------------------------------------------------------------------------

// function describe(person) {
//   return `${person.name} is ${person.age} years old`;
// }
// console.log(describe({ name: "Ali", age: 25 }));
//---------------------------------------------------------------------------------------------------------------------------
// function totalStock(inventory) {
//   let total = 0;
//   const values = Object.values(inventory);
//   for (let i = 0; i < values.length; i++) {
//     total += values[i];
//   }
//   return total;
// }

// console.log(totalStock({ apples: 5, bananas: 3, pears: 8 }));
//---------------------------------------------------------------------------------------------------------------------------
// function listNames(scores) {
//   const names = Object.keys(scores);
//   return names;
// }
// console.log(listNames({ ali: 90, veli: 75, ayse: 88 }));
//---------------------------------------------------------------------------------------------------------------------------
function getCity(user) {
  return user.adress?.city; //if address exists, get .city; if address is missing/undefined, stop and return undefined instead of crashing.
}
const person1 = {
  name: "ali",
  adress: {
    city: "izmir",
    street: 5,
  },
};
const person2 = {
  name: "ali",
};
console.log(getCity(person1));
console.log(getCity(person2));
