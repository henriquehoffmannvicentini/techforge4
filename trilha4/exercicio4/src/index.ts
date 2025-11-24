interface Livro {
  titulo: string;
  autor: string;
  disponivel: boolean;
}

class Biblioteca {
  private livros: Livro[] = [];

  adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  buscarLivrosDisponiveis(): Livro[] {
    return this.livros.filter(livro => livro.disponivel);
  }
}

const biblioteca = new Biblioteca();

biblioteca.adicionarLivro({ titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", disponivel: true });
biblioteca.adicionarLivro({ titulo: "1984", autor: "George Orwell", disponivel: false });
biblioteca.adicionarLivro({ titulo: "Dom Casmurro", autor: "Machado de Assis", disponivel: true });

const disponiveis = biblioteca.buscarLivrosDisponiveis();

console.log("Livros disponíveis:");
disponiveis.forEach(livro => {
  console.log(`- ${livro.titulo}, de ${livro.autor}`);
});
