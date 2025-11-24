abstract class GerenciadorFavoritos {
    abstract adicionarFavorito(item: string): void;
    abstract obterFavoritos(): string[];
}

class GerenciadorFilmesFavoritos extends GerenciadorFavoritos {
    private favoritos: string[] = [];

    adicionarFavorito(item: string): void {
        if (!this.favoritos.includes(item)) {
            this.favoritos.push(item);
        }
    }

    obterFavoritos(): string[] {
        return [...this.favoritos].sort();
    }
}

class GerenciadorLivrosFavoritos extends GerenciadorFavoritos {
    private favoritos: string[] = [];

    adicionarFavorito(item: string): void {
        this.favoritos.unshift(item);
    }

    obterFavoritos(): string[] {
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