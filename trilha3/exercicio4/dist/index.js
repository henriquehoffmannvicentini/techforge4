"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(energiaInicial = 50) {
        this.energia = energiaInicial;
    }
    alterarEnergia(valor) {
        this.energia += valor;
        if (this.energia < 0) {
            this.energia = 0;
        }
    }
    statusEnergia() {
        console.log(`Nível de energia: ${this.energia}`);
    }
    comer() {
        this.alterarEnergia(10);
        console.log("O animal está comendo.");
    }
}
class Leao extends Animal {
    comer() {
        console.log("O leão vai caçar...");
        this.alterarEnergia(-20);
        console.log("O leão conseguiu caçar e está se alimentando!");
        this.alterarEnergia(40);
    }
}
class Passaro extends Animal {
    comer() {
        console.log("O pássaro encontrou sementes e está se alimentando.");
        this.alterarEnergia(15);
    }
}
// Função que usa polimorfismo
function alimentarAnimais(animais) {
    animais.forEach((animal, index) => {
        console.log(`--- Animal ${index + 1} ---`);
        animal.comer();
        animal.statusEnergia();
        console.log("");
    });
}
// Testando
const animais = [
    new Leao(60),
    new Passaro(30),
    new Leao(40),
    new Passaro(50)
];
alimentarAnimais(animais);
//# sourceMappingURL=index.js.map