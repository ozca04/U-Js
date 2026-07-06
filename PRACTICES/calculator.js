function calculate() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let calculation = document.getElementById("calculation").value;


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
}