interface Documento{
    titulo: string;
    conteudo: string;
}

class Texto implements Documento{
    titulo: string;
    conteudo: string;

    constructor(titulo:string,conteudo:string){
        this.titulo = titulo;
        this.conteudo = conteudo;
    }

    exibir(): string{
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
}

const doc1 = new Texto("documento 1", "que tem vários conteudos e coisas escritas");
const doc2 = new Texto("documento 2", "que tem menos coisas");

console.log(doc1.exibir());
console.log(doc2.exibir());

