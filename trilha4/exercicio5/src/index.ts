interface LivroBiblioteca {
  titulo: string;
  autor: string;
  genero: string;
  disponivel: boolean;
}

class BibliotecaGestao {
  private livros: LivroBiblioteca[] = [];

  adicionarLivro(livro: LivroBiblioteca): void {
    this.livros.push(livro);
  }

  filtrarPorGenero(genero: string): LivroBiblioteca[] {
    return this.livros.filter(
      livro => livro.genero.toLowerCase() === genero.toLowerCase()
    );
  }
 
  buscarPorAutor(autor: string): LivroBiblioteca[] {
    return this.livros.filter(
      livro => livro.autor.toLowerCase() === autor.toLowerCase()
    );
  }

  obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
    return this.livros
      .filter(livro => livro.disponivel)
      .sort((a, b) => a.titulo.localeCompare(b.titulo));
  }
}

const biblioteca = new BibliotecaGestao();

biblioteca.adicionarLivro({ titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true });
biblioteca.adicionarLivro({ titulo: "1984", autor: "George Orwell", genero: "Ficção Científica", disponivel: false });
biblioteca.adicionarLivro({ titulo: "O Silmarillion", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true });
biblioteca.adicionarLivro({ titulo: "Dom Casmurro", autor: "Machado de Assis", genero: "Romance", disponivel: true });
biblioteca.adicionarLivro({ titulo: "A Revolução dos Bichos", autor: "George Orwell", genero: "Fábula Política", disponivel: true });

console.log("Livros de Fantasia:");
console.log(biblioteca.filtrarPorGenero("Fantasia"));

console.log("Livros de George Orwell:");
console.log(biblioteca.buscarPorAutor("George Orwell"));

console.log("Livros disponíveis (ordenados):");
console.log(biblioteca.obterLivrosDisponiveisOrdenados());
