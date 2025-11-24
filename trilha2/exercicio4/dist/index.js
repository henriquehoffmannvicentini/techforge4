"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Temperatura {
    constructor(valorCelsius) {
        this.valorCelsius = valorCelsius;
    }
    calcularFahrenheit() {
        console.log((this.valorCelsius * 1, 8) + 32);
    }
    calcularKelvin() {
        console.log(this.valorCelsius + 273, 15);
    }
}
let Temperatura1 = new Temperatura(22);
console.log(Temperatura1.calcularFahrenheit);
console.log(Temperatura1.calcularKelvin);
//# sourceMappingURL=index.js.map