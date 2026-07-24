/* ============================================================
   DEFINING & CALLING FUNCTIONS
   Basic function declarations, arguments,
   and a loop that repeats a value.
   ============================================================ */

function carList(year, engineSize, seller){
    console.log(`audi: ${year}, ${engineSize}, ${seller[0].toUpperCase()}.`)
}//define the funtion 
carList(2003, "2.0 TSFI", "eric")//run the function 


function rant(message){
    console.log(`${message}`.toUpperCase())
}
rant("I hate beets")


function repeat(name, age){
    let results = '';
    for(let i = 0; i < age; i++){
        results += name;
    }
    console.log(results)
}
repeat(" ahmet", 3)