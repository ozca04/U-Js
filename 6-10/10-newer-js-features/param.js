
const users = [
    {
        name:'mahmut',
        surName: 'mahh',
        age:22
    },
    {
        name:'ahmad',
        surName:'ahhhh',
        age: 42
    }
]

function fullName({name, surName}){
    return `${name} ${surName}`
}

 
const adults = users.filter((user) => user.age > 30);
const descriptions = users.map((user) => `${user.name} is ${user.age} years old`);
console.log(descriptions);