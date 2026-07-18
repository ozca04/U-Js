const { use } = require("react");

const nums = [1, 3, 6, 7, 11, 17, 24, 32, 56, 91, 112]

console.log(Math.max(nums))// js doesnt know what to do with this so it has to be spreaded with '...'
console.log(Math.min(...nums))

//////////////////////////////////

const cats = ['blue', 'red', 'pink', 'purple'];
const dogs = ['one', 'two', 'three'];

const allPets = [...cats, ...dogs]//outcome is an copy, not a new one //if something new is .pushed in, it will no change the original 


console.log([...'hello'])// spread the string

//SPREAD in object literals. copies properties from one object into another object literal. 

const feline = {legs: 4, family: 'Felidae'}
const canine = {family: 'Caninae', furry: true}

const dog = {...canine, isPet: true}
const lion = {...feline, genus:'Panthera'}
const catDog = {...feline, ...canine}


const user = { 
    mail: 'ahmad@gmail.com',
    password: 'mahmad',
    username: 'ahmadddd'
}
const newUser = {...user, id: 2312, isAdmin: false}