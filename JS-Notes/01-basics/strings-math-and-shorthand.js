/* ============================================================
   STRINGS, MATH & SHORTHAND OPERATORS
   String methods (toUpperCase, indexOf, slice, replace, repeat),
   template literals `${ }`, the Math object, and += -= *= /= shorthand.
   ============================================================ */

let a = 1; 
let b = 1;
let c = 1;
let d = 1;

a -= 1;
b += 1;
c *= 1;
d /= 1;

//console.log(a);
//console.log(b);
//console.log(c);
//console.log(d);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
let animal = "dog";
let madDog = animal.toUpperCase();

 
animal[0]; //--------> first letter of the string 
console.log(animal[1]); //--------> second letter of the string 

console.log(
    animal.toUpperCase()
);

console.log(
    madDog.toUpperCase("d")
);

let msg = "ahha that is so funny!";

console.log(
msg.indexOf("f")//tells what is the position of the f 
);

console.log(
"haha that is so funny!".slice(5, 9)
);



console.log(msg.replace("ahha", "axaxaxa" ));

console.log("axa".repeat(10));

// DON'T TOUCH THIS LINE! (please)
const word = "skateboard"; //Don't change this line!

// YOUR CODE BELOW THIS LINE:

 const facialHair = word.slice(5).replace("o", "e");

console.log(facialHair);

                                                        //string template literals 
console.log(`hello ${1+3+4+5}`);

let pricePerProduct = 2.23;
let nameOfTheProduct = "coco";
let amountOfTheProduct = 4;

console.log(`You bought ${amountOfTheProduct} ${nameOfTheProduct}. total price is ${pricePerProduct * amountOfTheProduct}`)

                                                        ///// MATH OBJECTS, u can do sin/con math objects like pi, rounding and etc.
console.log(Math.PI);

const random1 = Math.random();
const random2 = random1*10
const random3 = Math.floor(random2);
const random4 = random3 + 1;

console.log(random3);
console.log(random4 + 4);
