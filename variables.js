const animal = "dog";
let numberofdogs = 2;

console.log(animal);
console.log(numberofdogs);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let age = 25;            // number
let name = "Alex";       // string (text)
let isStudent = true;    // boolean (true/false)
let car;                 // undefined (declared, no value yet)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// operators, symbols doing work inside the parentheses: 
    //Arithmetic: + - * / %
    //Comparison: > < >= <= === !== (always give back true/false)
    //Logical: && (and), || (or), ! (not) — combine multiple true/false checks
    //Assignment: = (set value), += -= *= (shortcut for "update this value")

let dogyears = numberofdogs * 7;
console.log(dogyears);

console.log(animal + "years: " + dogyears);

console.log(numberofdogs > 5);
console.log(numberofdogs === 2);

console.log(10 % 3);

////////////
if (numberofdogs > 5) {
  console.log("You have a lot of dogs!");
} else if (numberofdogs > 0) {
  console.log("You have a few dogs.");
} else {
  console.log("No dogs yet.");
}
////////////JS checks top to bottom and stops at the first one that's true.