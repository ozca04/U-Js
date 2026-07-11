// const counter = {
//     count: 0,
//     increment(){
//         this.count++
//         return this.count
//     }
// }
// console.log(counter.increment())


// const dog = {
//     name: 'rex',
//     age: 3,
//     describe(){
//         return `${this.name} is ${this.age} years old`
//     }
// }


// const bankAccount = {
//     balance: 100,
//     deposit(amount){
//         this.balance += amount
//         return this.balance
//     }
// }
// console.log(bankAccount.deposit(190))

// function printTimesTable(num){
//     for(let i = 1; i <= 5; i++){
//         console.log(num * i);
//     }
// }
// printTimesTable(3);

function sumUpTo(n){
    let sum = 0
    for(let i = 1; i <= n; i++){
        sum += i 
    }
    return sum
}

console.log(sumUpTo(4))