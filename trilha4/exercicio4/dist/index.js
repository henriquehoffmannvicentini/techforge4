"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 2 - Classe Biblioteca que contém um array de livros
class Biblioteca {
    constructor() {
        this.livros = [];
    }
    // Método para adicionar livros à biblioteca
    adicionarLivro(livro) {
        this.livros.push(livro);
    }
    // 3 - Método para buscar livros disponíveis
    buscarLivrosDisponiveis() {
        return this.livros.filter(livro => livro.disponivel);
    }
}
// 4 - Exemplo de uso
const biblioteca = new Biblioteca();
// Adicionando livros
biblioteca.adicionarLivro({ titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", disponivel: true });
biblioteca.adicionarLivro({ titulo: "1984", autor: "George Orwell", disponivel: false });
biblioteca.adicionarLivro({ titulo: "Dom Casmurro", autor: "Machado de Assis", disponivel: true });
// Buscando livros disponíveis
const disponiveis = biblioteca.buscarLivrosDisponiveis();
// Exibindo resultado
console.log("Livros disponíveis:");
disponiveis.forEach(livro => {
    console.log(`- ${livro.titulo}, de ${livro.autor}`);
});
//# sourceMappingURL=index.js.map