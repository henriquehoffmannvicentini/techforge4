"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Loja {
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    buscarProdutoPorCodigo(codigo) {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}
const loja1 = new Loja();
loja1.adicionarProduto({ codigo: 101, nome: "notebook" });
loja1.adicionarProduto({ codigo: 102, nome: "fone de ouvido" });
const produtoEncontrado = loja1.buscarProdutoPorCodigo(102);
const produtoInexistente = loja1.buscarProdutoPorCodigo(999);
if (produtoEncontrado) {
    console.log(`Produto encontrado: ${produtoEncontrado.nome}`);
}
else {
    console.log("Produto não encontrado.");
}
if (produtoInexistente) {
    console.log(`Produto encontrado: ${produtoInexistente.nome}`);
}
else {
    console.log("Produto não encontrado.");
}
//# sourceMappingURL=index.js.map