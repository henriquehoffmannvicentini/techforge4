abstract class Pagamento {
    abstract processar(): void;
}

class PagamentoCartao extends Pagamento {
    private numeroCartao: string;

    constructor(numeroCartao: string) {
        super();
        this.numeroCartao = numeroCartao;
    }

    private validarNumeroCartao(): boolean {
        return /^\d{16}$/.test(this.numeroCartao);
    }

    processar(): void {
        if (this.validarNumeroCartao()) {
            console.log(`Pagamento com cartão ${this.numeroCartao} processado com sucesso.`);
        } else {
            console.log("Número de cartão inválido.");
        }
    }
}

class PagamentoBoleto extends Pagamento {
    private valor: number;

    constructor(valor: number) {
        super();
        this.valor = valor;
    }

    private gerarCodigoBoleto(): string {
        return Math.floor(Math.random() * 1e44).toString();
    }

    processar(): void {
        const codigo = this.gerarCodigoBoleto();
        console.log(`Boleto gerado no valor de R$ ${this.valor.toFixed(2)}.`);
        console.log(`Código do boleto: ${codigo}`);
    }
}


function processarPagamentos(pagamentos: Pagamento[]): void {
    pagamentos.forEach((pagamento, index) => {
        console.log(`--- Processando pagamento ${index + 1} ---`);
        pagamento.processar();
        console.log("");
    });
}

// Testando
const pagamentos: Pagamento[] = [
    new PagamentoCartao("1234567890123456"), // válido
    new PagamentoCartao("12345"),            // inválido
    new PagamentoBoleto(350.75)
];

processarPagamentos(pagamentos);
