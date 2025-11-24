interface Produto{
    id: number;
    nome: string;
    preco: number;
}

class ItemLoja implements Produto{
    id: number;
    nome: string;
    preco: number;

    constructor(id:number,nome:string,preco:number){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    exibirInformação(): void{
        console.log(`ID: ${this.id} | Nome: ${this.nome} | Preço: R$ ${this.preco.toFixed(2)}`);
    }
}

const produto1 = new ItemLoja(1, "teclado", 200.00);
const produto2 = new ItemLoja(2, "mouse", 100.00);

produto1.exibirInformação();
produto2.exibirInformação();