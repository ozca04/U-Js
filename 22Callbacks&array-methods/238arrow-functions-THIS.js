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