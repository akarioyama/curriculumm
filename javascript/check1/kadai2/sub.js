class Car {
    constructor(gas, number) {
        this.gas = gas;
        this.number = number;
    }

    getNumGas() {
        console.log(`ガソリンは${this.gas}です。ナンバーは${this.number}です。`);
    }
}

let car1 = new Car('車1のガソリン', '車1のナンバー');
let car2 = new Car('車2のガソリン', '車2のナンバー');

car1.getNumGas();  // ガソリンは車1のガソリンです。ナンバーは車1のナンバーです。
car2.getNumGas();  // ガソリンは車2のガソリンです。ナンバーは車2のナンバーです。