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