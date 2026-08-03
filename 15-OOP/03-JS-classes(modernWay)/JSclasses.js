class Car {
  constructor(make, model, year, ownerName, price) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.ownerName = ownerName;
    this.carPrice = price;
  }
  greet() {
    const { make, model, year, ownerName, price } = this; //with this u can remove .this from return
    return `${make}:${model} belongs to ${ownerName}`;
  }
  carData() {
    return `this ${this.year} car is listed for ${this.carPrice}$`;
  }
  fairValue(fair = (this.carPrice * 80) / 100) {
    return `fair value for this car is ${fair}`;
  }
}
const car1 = new Car("Audi", "A3", 2008, "mahmut", 3500);
