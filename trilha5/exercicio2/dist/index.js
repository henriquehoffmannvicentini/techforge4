"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Inventario {
    constructor() {
        this.itens = {};
    }
}
class InventarioArmazem extends Inventario {
    adicionarItem(item, quantidade) {
        if (quantidade <= 0) {
            console.log(`Quantidade inválida para o item "${item}".`);
            return;
        }
        if (this.itens[item]) {
            this.itens[item] += quantidade;
        }
        else {
            this.itens[item] = quantidade;
        }
        console.log(`Adicionado ${quantidade}x "${item}" ao inventário do armazém.`);
    }
    removerItem(item) {
        if (!this.itens[item]) {
            console.log(`O item "${item}" não existe no armazém.`);
            return;
        }
        delete this.itens[item];
        console.log(`Item "${item}" removido do inventário do armazém.`);
    }
    obterInventario() {
        return this.itens;
    }
}
class InventarioLoja extends Inventario {
    constructor() {
        super(...arguments);
        this.LIMITE_POR_ITEM = 10;
    }
    adicionarItem(item, quantidade) {
        if (quantidade <= 0) {
            console.log(`Quantidade inválida para o item "${item}".`);
            return;
        }
        const quantidadeAtual = this.itens[item] || 0;
        const novaQuantidade = quantidadeAtual + quantidade;
        if (novaQuantidade > this.LIMITE_POR_ITEM) {
            console.log(`Não é possível adicionar ${quantidade}x "${item}". Limite máximo por item é ${this.LIMITE_POR_ITEM}.`);
            this.itens[item] = this.LIMITE_POR_ITEM;
        }
        else {
            this.itens[item] = novaQuantidade;
            console.log(`Adicionado ${quantidade}x "${item}" ao inventário da loja.`);
        }
    }
    removerItem(item) {
        if (!this.itens[item]) {
            console.log(`O item "${item}" não existe na loja.`);
            return;
        }
        delete this.itens[item];
        console.log(`Item "${item}" removido do inventário da loja.`);
    }
    obterInventario() {
        return this.itens;
    }
}
const armazem = new InventarioArmazem();
armazem.adicionarItem("Parafuso", 500);
armazem.adicionarItem("Martelo", 20);
armazem.removerItem("Martelo");
console.log("\n📦 Inventário do Armazém:", armazem.obterInventario());
const loja = new InventarioLoja();
loja.adicionarItem("Parafuso", 5);
loja.adicionarItem("Parafuso", 8);
loja.adicionarItem("Chave de Fenda", 3);
console.log("\n🏪 Inventário da Loja:", loja.obterInventario());
//# sourceMappingURL=index.js.map