/* ============================================================
   &&  (AND)
   Both conditions must be true. Otherwise false.
   ============================================================ */

//&&// AND, both conditions has to be true, rest is false 
const password = prompt("enter your password");
if (password.length >= 6 && password.indexOf(' ') === -1){
    console.log("correct")
}else{
    console.log("incorrect")
}