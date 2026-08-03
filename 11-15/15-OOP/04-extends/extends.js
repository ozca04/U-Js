//////////////////////////////// LONG WAY ////////////////////////////////////
// class Cat {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     return `${this.name} is eating`;
//   }
//   meow() {
//     return `meooooow`;
//   }
// }

// class Dog {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     return `${this.name} is eating`;
//   }
//   bark() {
//     return `wooof`;
//   }
// }
//////////////////////////////// SHORT WAY ////////////////////////////////////
class Pet {
  constructor(name, age) {
    console.log("in pet calc");
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log("in cat calc");
    super(name, age); // referance to supper class
    this.livesLeft = livesLeft;
  }
  meow() {
    return `meooooow`;
  }
}

class Dog extends Pet {
  bark() {
    return `wooof`;
  }
}
