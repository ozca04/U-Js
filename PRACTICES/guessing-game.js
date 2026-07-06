let number = parseInt(prompt("enter a number "))
while(!number){
    let number = parseInt(prompt("enter a VALID number "))
}

const targetNum = Math.floor(Math.random() * number) + 1

console.log(targetNum)