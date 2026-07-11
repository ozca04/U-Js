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

// function sumUpTo(n){
//     let sum = 0
//     for(let i = 1; i <= n; i++){
//         sum += i 
//     }
//     return sum
// }

// console.log(sumUpTo(4))

// function countdown(numm){
//     for(let i = numm; i > 0; i--){
//         console.log(i)
//     }
// }

// countdown(80)

// const student = {
//     name: 'mia',
//     grades: [80, 90, 100],
//     average(){
//         let sum = 0;
//         for(let i = 0; i < this.grades.length; i++){
//             sum += this.grades[i];
//         }
//         return sum / this.grades.length;
//     }
// }
// console.log(student.average());


function filterLongWords(words){
    let result = [];
    for(let i = 0; i < words.length; i++){
        if(words[i].length > 4){
            result.push(words[i]);
        }
    }
    return result;
}
console.log(filterLongWords(["hi", "hello", "cat", "elephant"]));