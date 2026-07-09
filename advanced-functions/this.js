//this used to access other properties on the same object
// const person = {
//     first : 'ahmet',
//     second : 'mehmet',
//     fullname(){
//         return `${this.first} ${this.second }`
//     }
// }
// console.log(person.fullname())
// person.second = 'ceyhun';
// console.log(person.fullname())

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg(){
            this.eggCount++
            return 'EGG'
    }
}
console.log(hen.layAnEgg())
console.log(hen.layAnEgg())
console.log(hen.layAnEgg())
console.log(hen.eggCount)