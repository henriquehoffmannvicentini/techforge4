"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class contaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(colocar) {
        this.saldo = this.saldo + colocar;
    }
    sacar(tirar) {
        this.saldo = this.saldo - tirar;
    }
    detalhesDaConta() {
        console.log(`A conta Bancária de ${this.titular} tem R$${this.saldo}`);
    }
}
let conta1 = new contaBancaria("Matheus", 500);
conta1.depositar(100);
console.log(conta1.detalhesDaConta);
conta1.sacar(300);
console.log(conta1.detalhesDaConta);
//# sourceMappingURL=index.js.map