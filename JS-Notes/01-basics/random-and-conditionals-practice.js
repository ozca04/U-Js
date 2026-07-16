/* ============================================================
   EARLY PRACTICE: random numbers + if/else
   Rolling dice with Math.random(), template literals, basic conditionals.
   ============================================================ */

const die1 = Math.floor(Math.random() * 6) + 1; 
const die2 = Math.floor(Math.random() * 6) + 1; 

let roll = `
die1: ${die1}
die2: ${die2}
roll: "You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}"`

console.log (roll);

prompt("please enter")

//add the js file in the end of body, inside of it 

let random = Math.floor(Math.random() * 10);
if (random >= 5){
    console.log(`Your number '${random}' is bigger or equal to 5`)
}else{
    console.log(`Your number '${random}' is smaller than 5`)
}