let number = parseInt(prompt("enter a number "))
while(!number){
    let number = parseInt(prompt("enter a VALID number "))
}


const targetNum = Math.floor(Math.random() * number) + 1
let attempts = 1;

let guess = parseInt(prompt("enter your first guess"));
while(parseInt(guess) !== targetNum){
    if(guess === "q") break;
    attempts++;
    if(guess> targetNum){
        guess = prompt("too high");
    }else{
        guess = prompt("too low")
    }
}

if(guess === "q"){
    console.log("u failed")
}

console.log(` you got it. it took ${attempts} attmepts`)