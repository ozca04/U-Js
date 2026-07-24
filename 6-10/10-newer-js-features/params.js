function rollDie(numSides){
    return Math.floor(Math.random()*numSides) + 1
}//when its just like that defult is NaN

function rollDie(numSides = 6){
    return Math.floor(Math.random()*numSides) + 1
}// this way the defult is 6, when u put a value in the function it gets accepted as well. 

// default paramater always should come second 

function greet(person, msg = 'hey there'){
    console.log(`${msg}, ${person}`)
}