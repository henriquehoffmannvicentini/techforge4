"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Texto {
    constructor(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    exibir() {
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
}
const doc1 = new Texto("documento 1", "que tem vários conteudos e coisas escritas");
const doc2 = new Texto("documento 2", "que tem menos coisas");
console.log(doc1.exibir());
console.log(doc2.exibir());
//# sourceMappingURL=index.js.map