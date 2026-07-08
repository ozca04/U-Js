//return lets you use the function's result (its output value) outside the function.
//return also stops the execution of the function 

function add(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        return false;
    }
    return x + y;
}// only 1 thing can be returned. even if its an objec or an array 


function multiply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return false         
    }
    return num1 * num2    
}
multiply(4, 6)



function lastElement(arr){
    if(arr.length === 0){
        return null;
    }
    return arr[arr.length - 1];
}
//console.log(lastElement([5, 6, 7]))

function capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
}
//console.log(capitalize('ahmet'))  //str[0].toUpperCase() → the first letter, capitalized. str.slice(1) → everything from index 1 onward (the rest, unchanged). + joins them.

function sumArray(numbb){
    let results = 0;
    for(let i = 0; i < numbb.length; i++){
        results += numbb[i];
    }
    return results;
}
results(5, 4)

