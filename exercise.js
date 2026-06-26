const die1 = Math.floor(Math.random() * 6) + 1; 
const die2 = Math.floor(Math.random() * 6) + 1; 

let roll = `
die1: ${die1}
die2: ${die2}
roll: "You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}"`

console.log (roll);