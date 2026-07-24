/* ============================================================
   !  (NOT)
   Flips a boolean. !true === false. Useful for 'if empty' checks.
   ============================================================ */

//NOT// ! --->used to reverse if !true === false 
const firstName = prompt("enter your first name")
if(!firstName){ //if "not" used its longer firstname === false etc.
    firstName = prompt("try again")
}

const age = 45;
if (!(age >= 0 && age < 5 || age >= 65)){
    console.log("its not free for u")
}