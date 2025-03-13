// Interface
interface Vehicule {
    make : string
    model : string
    year : number
    start() : void,
}

// Class
class Car implements Vehicule{
    make : string
    model : string
    year : number

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void{
            console.log('Car engine started')
    }
}

//Instances
let car1 = new Car("Ferrari", 'SF90', 2019)
let car2 = new Car("Mercedes-Benz", 'McLaren', 2003)
let car3 = new Car("Audi", 'e-Tron GT', 2021)

car1.start()