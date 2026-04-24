function Car(brand, speed) {
    this.brand = brand;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
};

Car.prototype.brake = function () {
    this.speed -= 5;
};

Car.prototype.getStatus = function () {
    return `${this.brand} running at ${this.speed} km/h`;
};

let c1 = new Car('BMW', 60);
let c2 = new Car('Audi', 70);

c1.accelerate();
c2.brake();

console.log(c1.getStatus());
console.log(c2.getStatus());