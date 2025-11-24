"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SistemaVotacao {
    constructor() {
        this.votos = new Map();
    }
}
class Eleicao extends SistemaVotacao {
    votarPara(candidato) {
        const votosAtuais = this.votos.get(candidato) || 0;
        this.votos.set(candidato, votosAtuais + 1);
    }
    obterResultados() {
        const resultados = {};
        this.votos.forEach((valor, chave) => {
            resultados[chave] = valor;
        });
        return resultados;
    }
}
class Enquete extends SistemaVotacao {
    votarPara(candidato) {
        const votosAtuais = this.votos.get(candidato) || 0;
        this.votos.set(candidato, votosAtuais + 1);
    }
    obterResultados() {
        return Array.from(this.votos.entries())
            .sort(([, a], [, b]) => b - a)
            .reduce((obj, [chave, valor]) => {
            obj[chave] = valor;
            return obj;
        }, {});
    }
}
// Exemplo de uso:
const eleicao = new Eleicao();
eleicao.votarPara("Candidato A");
eleicao.votarPara("Candidato B");
eleicao.votarPara("Candidato A");
console.log("Resultados da eleição:", eleicao.obterResultados());
const enquete = new Enquete();
enquete.votarPara("Opção 1");
enquete.votarPara("Opção 2");
enquete.votarPara("Opção 2");
enquete.votarPara("Opção 3");
enquete.votarPara("Opção 2");
console.log("Resultados da enquete:", enquete.obterResultados());
//# sourceMappingURL=index.js.map