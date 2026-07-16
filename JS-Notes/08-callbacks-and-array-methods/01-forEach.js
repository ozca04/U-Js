/* ============================================================
   forEach
   Runs a function on each item. DOES something (side effects).
   Returns nothing - a 'return' inside it goes nowhere.
   ============================================================ */

const numbers = [1, 2, 3, 4, 5, ,6 ,7, 8, 11, 33]

numbers.forEach(function(el){
    console.log(el)
})

numbers.forEach(function(el){
    if(el % 2 ===0){
    console.log(el)
    }
})

 const namesAges = [
    {   
        name: 'ahmet',
        age: 22
    },
    {
        name: 'mehmet',
        age: 31
    },  
    {
        name: 'osman',
        age: 42
    }
 ]

 namesAges.forEach(function(xyz){
    console.log(xyz.name)
 })

 

// for(let el of numbers){
//     console.log(el)
// }