/* ============================================================
   map
   TRANSFORMS each item into a NEW array and returns it.
   Your hand-written 'build a new array' loop, in one line.
   ============================================================ */

const namesAges = [
    {   
        name: 'ahmet',
        age: 22
    },
    {
        name: 'mehmet',
        age: 31
    },  
    {
        name: 'osman',
        age: 42
    }

]
// const xyz = namesAges.map(function(identity){
//     return identity.name;
// })
//console.log(xyz)

const short = namesAges.map(identity => (
    identity.name
))
console.log(short )




// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here
const firstNames = fullNames.map(function(name){
    return name.first
})
console.log(firstNames)