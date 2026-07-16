/* ============================================================
   WHILE LOOP
   Repeats while a condition is true. Use when you don't know
   how many times ahead of time. 'break' exits early.
   ============================================================ */

// let num = 0;
// while (num < 10){
//     console.log(num);
//     num++;
// }

const SECRET = "osman";

let guess = prompt("enter the secret code...")
// while(guess !== SECRET){
//     guess = prompt("enter the secret code...")
// }
// console.log("correct")

//-------BREAK
let input = prompt("say something")
while (true){
    input = prompt(input);
    if(input === "stop"){
        break;
    }
}console.log("u won")