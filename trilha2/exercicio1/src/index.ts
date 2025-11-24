class contaBancaria {
    private titular: string;
    private saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(colocar: number) {
        this.saldo = this.saldo + colocar;
    }
    sacar(tirar: number) {
        this.saldo = this.saldo - tirar;
    }
    detalhesDaConta(): void {
        console.log(`A conta Bancária de ${this.titular} tem R$${this.saldo}`);
    }
}
let conta1 = new contaBancaria("Matheus", 500);
conta1.depositar(100);
console.log(conta1.detalhesDaConta);
conta1.sacar(300);
console.log(conta1.detalhesDaConta);
