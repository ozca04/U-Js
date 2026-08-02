function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.toBuy = function () {
  const { make, model, year } = this;
  return `good pick = ${make}:${model}(${year})`;
};
Car.prototype.toAvoid = function () {
  const { make, model, year } = this;
  return `bad pick = ${make}:${model}(${year})`;
};

const Car_1 = new Car("auidi", "A4", 2014);
const Car_2 = new Car("BMW", "320i", 2008);
