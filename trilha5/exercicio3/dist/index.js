"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GerenciadorFavoritos {
}
class GerenciadorFilmesFavoritos extends GerenciadorFavoritos {
    constructor() {
        super(...arguments);
        this.favoritos = [];
    }
    adicionarFavorito(item) {
        if (!this.favoritos.includes(item)) {
            this.favoritos.push(item);
        }
    }
    obterFavoritos() {
        return [...this.favoritos].sort();
    }
}
class GerenciadorLivrosFavoritos extends GerenciadorFavoritos {
    constructor() {
        super(...arguments);
        this.favoritos = [];
    }
    adicionarFavorito(item) {
        this.favoritos.unshift(item);
    }
    obterFavoritos() {
        return this.favoritos;
    }
}
const gerenciadorFilmes = new GerenciadorFilmesFavoritos();
gerenciadorFilmes.adicionarFavorito("Matrix");
gerenciadorFilmes.adicionarFavorito("Avatar");
gerenciadorFilmes.adicionarFavorito("A Origem");
gerenciadorFilmes.adicionarFavorito("Avatar");
console.log("Filmes:", gerenciadorFilmes.obterFavoritos());
const gerenciadorLivros = new GerenciadorLivrosFavoritos();
gerenciadorLivros.adicionarFavorito("1984");
gerenciadorLivros.adicionarFavorito("O Hobbit");
gerenciadorLivros.adicionarFavorito("Duna");
console.log("Livros:", gerenciadorLivros.obterFavoritos());
//# sourceMappingURL=index.js.map