class Livro {
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;
    constructor(titulo: string, autor: string, paginas: number, lido: boolean) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }
    marcarLivroLido() {
        this.lido = true;
    }
    situacaoLivro(): void {
        console.log(`O ${this.titulo} do autor ${this.autor} que tem ${this.paginas} foi lido? ${this.lido}`);
    }
}
let livro1 = new Livro("harry potter", "J.K", 250, false);
livro1.marcarLivroLido;
console.log(livro1.situacaoLivro);
