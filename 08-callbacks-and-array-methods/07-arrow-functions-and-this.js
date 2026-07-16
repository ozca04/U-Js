/* ============================================================
   ARROWS + 'this'
   When to use a normal function (as a method) vs an arrow
   (inside setTimeout, so 'this' stays the object).
   ============================================================ */

const person = {
    firstName: 'ahmet',
    lastName: 'mehmet',
    fullName: function(){
      return  `${this.firstName} ${this.lastName}`
    },//burada => kullanmak mantikli degil
    shoutNAME: function(){
        setTimeout(() => {
            console.log(this.fullName())
        }, 3000)// burada => kullanman gerek
    } 
}

person.shoutNAME()