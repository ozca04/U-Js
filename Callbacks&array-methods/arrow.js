const square = (x) =>{
    return x * x
}
const add = (x, y) =>{
    return x + y
}

console.log(add(10, 19))

const rollDie = () => {
    return Math.floor(Math.random()*6)+1
}

const greet = (name) => {
    return `Hey ${name}`
}
console.log(greet('mahmut'))