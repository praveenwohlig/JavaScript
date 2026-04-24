let laptop1 = {
    cpu: "M5",
    ram: 16,
    brand: "Apple",
    compare: function (other) {
        if (this.cpu > other.cpu) {
            console.log(this);

        }
        else {
            console.log(other);

        }
    }

}
let laptop2 = {
    cpu: "i9",
    ram: 16,
    brand: "HP",
    getConfig: function () {
        console.log(this.cpu);
    }
}
console.log(laptop1.compare(laptop2));
