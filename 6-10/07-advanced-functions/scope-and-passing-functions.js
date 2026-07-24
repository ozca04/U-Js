/* ============================================================
   SCOPE + PASSING FUNCTIONS AS ARGUMENTS
   callTwice / callTenTimes take a function
   and run it. This is the idea behind callbacks.
   ============================================================ */

// const square = function mahmut (num) {
//     return num*num;
// }
// square(10)

function callTwice(func){
    func()
    func()
}

function rollDie(){
    const roll = Math.floor(Math.random() * 8) + 1
    console.log(roll)
}
callTwice(rollDie)

function callTenTimes(f){
    for(let i = 0; i<10;  i++){
        f()
    }
}