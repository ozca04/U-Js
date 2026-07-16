/* ============================================================
   reduce
   Boils an array down to a single value (e.g. a sum) using an accumulator.
   NOTE: 'const total' is redeclared after 'let total' - kept as written.
   ============================================================ */

const ahmet = [3,5,7,9,11].reduce((accumulator, currentValue) =>{
    return accumulator + currentValue
})

console.log(ahmet)
//3+5
//8+7
//15+9
//24+11
// = 35

const prices = [4, 5, 8, 12, 64, 34, 121]

let total = 0;
for(let price of prices){
    total += price
}

const total = prices.reduce((total, price) => {
    return total + price
})