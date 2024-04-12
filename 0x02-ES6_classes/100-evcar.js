import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const clone = super.cloneCar();
    Object.setPrototypeOf(clone, Car.prototype);
    return clone;
  }
}
