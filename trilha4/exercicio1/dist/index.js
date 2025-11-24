"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ItemLoja {
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
    exibirInformação() {
        console.log(`ID: ${this.id} | Nome: ${this.nome} | Preço: R$ ${this.preco.toFixed(2)}`);
    }
}
const produto1 = new ItemLoja(1, "teclado", 200.00);
const produto2 = new ItemLoja(2, "mouse", 100.00);
produto1.exibirInformação();
produto2.exibirInformação();
//# sourceMappingURL=index.js.map