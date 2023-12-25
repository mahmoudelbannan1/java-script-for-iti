import { Car } from "./car.js";
export class FlyingCar extends Car {
  constructor(canFly, model, year, toString) {
    super(model, year);
    this.canFly = canFly;
  }
  toString() {
    if (this.canFly == true) {
      return `i can fly`;
    } else {
      return `i can't fly`;
    }
  }
}
