"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome,
            this.preco = preco,
            this.quantidade = quantidade;
    }
    calcularPrecoEmEstoque(preco, quantidade) {
        console.log(this.preco * this.quantidade);
    }
}
let Produto1 = new Produto("remedio", 20, 10);
console.log(Produto1.calcularPrecoEmEstoque);
//# sourceMappingURL=index.js.map