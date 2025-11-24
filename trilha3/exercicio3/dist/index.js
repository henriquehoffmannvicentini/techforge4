"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pagamento {
}
class PagamentoCartao extends Pagamento {
    constructor(numeroCartao) {
        super();
        this.numeroCartao = numeroCartao;
    }
    validarNumeroCartao() {
        return /^\d{16}$/.test(this.numeroCartao);
    }
    processar() {
        if (this.validarNumeroCartao()) {
            console.log(`Pagamento com cartão ${this.numeroCartao} processado com sucesso.`);
        }
        else {
            console.log("Número de cartão inválido.");
        }
    }
}
class PagamentoBoleto extends Pagamento {
    constructor(valor) {
        super();
        this.valor = valor;
    }
    gerarCodigoBoleto() {
        return Math.floor(Math.random() * 1e44).toString();
    }
    processar() {
        const codigo = this.gerarCodigoBoleto();
        console.log(`Boleto gerado no valor de R$ ${this.valor.toFixed(2)}.`);
        console.log(`Código do boleto: ${codigo}`);
    }
}
function processarPagamentos(pagamentos) {
    pagamentos.forEach((pagamento, index) => {
        console.log(`--- Processando pagamento ${index + 1} ---`);
        pagamento.processar();
        console.log("");
    });
}
// Testando
const pagamentos = [
    new PagamentoCartao("1234567890123456"), // válido
    new PagamentoCartao("12345"), // inválido
    new PagamentoBoleto(350.75)
];
processarPagamentos(pagamentos);
//# sourceMappingURL=index.js.map