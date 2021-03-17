class Vehicle {
    numberOfWheels;
    engineCapacity;
    color;
    constructor(_numberOfWheels, _engineCapacity, _color) {
        this.numberOfWheels = _numberOfWheels;
        this.engineCapacity = _engineCapacity;
        this.color = _color;
    }
    allInfo() {
        return `The number of wheels is ${this.numberOfWheels} , the engine capacity is ${this.engineCapacity} and the color is ${this.color}`
    }
    static bigEng(arr) {
        const lastArr = arr.sort((obj1, obj2) => {
            return obj1.engineCapacity - obj2.engineCapacity;
        });
        console.log(lastArr);
        return lastArr;
    }

}
let info1 = new Vehicle(4, 2500, "bleck");
let info2 = new Vehicle(6, 3000, "pink");
let info3 = new Vehicle(4, 1600, "white");
let arr = [info1, info2, info3];

let x = Vehicle.bigEng(arr);
let info = new Vehicle(4, 1600, "white");
console.log(info.allInfo());

class Privet extends Vehicle {
    name;
    constructor(_numberOfWheels, _engineCapacity, _color, _name) {
        super(_numberOfWheels, _engineCapacity, _color)
        this.name = _name;
    }
    parentDetails() {
        return `${super.allInfo()} and the name is ${this.name}`;
    }
}
let privetText = new Privet(4, 2500, "bleck", "privet");
console.log(privetText.parentDetails());

class Truck extends Vehicle {
    name;
    constructor(_numberOfWheels, _engineCapacity, _color, _name) {
        super(_numberOfWheels, _engineCapacity, _color)
        this.name = _name;
    }
    truckDetails() {
        return `${super.allInfo()} and the name is ${this.name}`;
    }
}
let truckText = new Truck(6, 3000, "pink", "truck");
console.log(truckText.truckDetails());

class Motorcycle extends Vehicle {
    name;
    constructor(_numberOfWheels, _engineCapacity, _color, _name) {
        super(_numberOfWheels, _engineCapacity, _color)
        this.name = _name;
    }
    motorcycleDetailse() {
        return `${super.allInfo()} and the name is ${this.name} `;
    }

    Upper() {
        return `${super.allInfo()} and the name is ${(this.name.toUpperCase())}`;
    }

    get Up() {
        return Upper();
    }
}
let motorcycleText = new Motorcycle(2, 1200, "green", "motorcycle");
console.log(motorcycleText.Upper());

function sendForm() {
    formTable.innerHTML +=
    `<tr>
        <td>${carName.value}</td>
        <td>${wheelsNumber.value}</td>
        <td>${engCaps.value}</td>
        <td>${colorinp.value}</td>
    </tr>`
}
sendForm();

