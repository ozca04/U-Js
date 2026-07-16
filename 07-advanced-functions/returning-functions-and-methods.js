/* ============================================================
   RETURNING FUNCTIONS + METHODS
   Functions that return functions (gamble, age),
   and objects whose values are functions (math, square = methods).
   ============================================================ */

// function gamble(){
//     const rand = Math.random()
//     if (rand > 0.5){
//         return function(){
//             console.log('jackpot')
//         }
//     }else{
//         return function(){
//             console.log('lose')
//         }
//     }
// }
// const spin = gamble()
// spin()

//////////////////////////////////////////////////////////////////////////////

// function age(min, max){
//     return function (num){
//         return num >= min && num <=max;
//     }
// }
// const adult = age(19, 65)
// const child = age(0, 18)
// console.log(child(35))

//////////////////////////////////////////////////////////////////////////////
// const math = {
//     multiply : function(x, y){
//         return x * y
//     },
//     divide : function(x, y){
//         return x / y
//     },
//     square : function(x){
//         return x * x
//     }
// }

// console.log(math.divide(10, 5))
////////////////////////////////////////////////////////////////////////////////

const square = {
    area : function(side){
        return side * side;
    },
    perimeter : function(side){
        return side * 4;
    }
}
console.log(square.perimeter(17))