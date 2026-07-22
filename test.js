function outer(){
    return function(){
        return "inner!";
    }
}
const fn = outer();
console.log(fn());