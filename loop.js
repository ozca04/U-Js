const animal = "dog";
let numberofdogs = 2;

//for--->start point → stop condition → step. if something is false, stops there 
for (let i = 1; i <= 5; i++) {
  console.log("Walking dog #" + i);
}

//function is how you package up a chunk of logic so you can reuse it — write it once, run it as many times as you want, with different inputs each time.
function describedog(name, age){
    console.log(name + " is " + age + " years old.");
}

describedog("rex", 3);
describedog("bella", 7);

// return is how a function gives back a value instead of just printing one.

function dogyearsclac(age){
    return age * 7;
}

let rexindogyears = dogyearsclac(3);
console.log(rexindogyears);

let num1 = 10;
let num2 = 4;

function calculate(num1, num2, operation) {
  if (operation === "add") {
    return num1 + num2;
  } else if (operation === "subtract") {
    return num1 - num2;
  } else if (operation === "multiply") {
    return num1 * num2;
  } else if (operation === "divide") {
    return num1 / num2;
  } else {
    return "Unknown operation";
  }
}

console.log(calculate(num1, num2, "add"));      // 14
console.log(calculate(num1, num2, "subtract")); // 6
console.log(calculate(num1, num2, "multiply")); // 40
console.log(calculate(num1, num2, "divide"));   // 2.5
console.log(calculate(num1, num2, "modulo"));   // Unknown operation