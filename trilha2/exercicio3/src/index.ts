class Produto{
    private nome: string;
    private preco: number;
    private quantidade: number;

    constructor(nome: string, preco: number, quantidade: number){
        this.nome = nome,
        this.preco = preco,
        this.quantidade = quantidade
    }
    calcularPrecoEmEstoque(preco: number,quantidade: number): void{
       console.log(this.preco * this.quantidade);
        
    }
}
let Produto1 = new Produto("remedio", 20, 10);
console.log(Produto1.calcularPrecoEmEstoque);