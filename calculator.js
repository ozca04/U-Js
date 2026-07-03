let a = Number(prompt("enter the first number"));
let b = Number(prompt("enter the second number"));
let calculation = prompt("enter what type of calculation u will do ( '+'  '-'  '*'  '/' )");

if(typeof a === "number" && typeof b === "number"){
    if (calculation === "*" || calculation === "x"){
        document.getElementById("output").textContent = a * b;
    }else if(calculation === "/"){
        document.getElementById("output").textContent = a / b;
    }else if(calculation === "+"){
        document.getElementById("output").textContent = a + b;
    }else if(calculation === "-"){
        document.getElementById("output").textContent = a - b;
    }else{
        document.getElementById("output").textContent = "undefined calcuation";
    }
}else{
    document.getElementById("output").textContent = "this is not a number";
}