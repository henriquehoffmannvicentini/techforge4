abstract class SistemaVotacao {
    protected votos: Map<string, number>;

    constructor() {
        this.votos = new Map<string, number>();
    }

    abstract votarPara(candidato: string): void;
    abstract obterResultados(): object;
}

class Eleicao extends SistemaVotacao {
    votarPara(candidato: string): void {
        const votosAtuais = this.votos.get(candidato) || 0;
        this.votos.set(candidato, votosAtuais + 1);
    }

    obterResultados(): object {
        const resultados: { [key: string]: number } = {};
        this.votos.forEach((valor, chave) => {
            resultados[chave] = valor;
        });
        return resultados;
    }
}

class Enquete extends SistemaVotacao {
    votarPara(candidato: string): void {
        const votosAtuais = this.votos.get(candidato) || 0;
        this.votos.set(candidato, votosAtuais + 1);
    }

    obterResultados(): object {
        return Array.from(this.votos.entries())
            .sort(([, a], [, b]) => b - a)
            .reduce((obj: { [key: string]: number }, [chave, valor]) => {
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