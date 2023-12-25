export class Car {
  constructor(model, year, toString) {
    this.model = model;
    this.year = year;
  }
  toString() {
    return `model = ${this.model} , year = ${this.year}`;
  }
}
