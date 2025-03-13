// Class
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log('Car engine started');
        console.log(`The ${this.make} ${this.model} of ${this.year} engine started`)
    };
    return Car;
}());
//Instance
let car1 = new Car("Ferrari", 'SF90', 2019)
let car2 = new Car("Mercedes-Benz", 'McLaren', 2003)
let car3 = new Car("Audi", 'e-Tron GT', 2021);

car1.start();
