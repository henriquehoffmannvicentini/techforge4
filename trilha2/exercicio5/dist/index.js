"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Agenda {
    constructor(compromissos) {
        this.compromissos = compromissos;
    }
    adicionarCompromisso(compromisso) {
        this.compromissos.push(compromisso);
    }
    listarCompromissos() {
        if (this.compromissos.length === 0) {
            console.log("nenhum compromisso na agenda");
        }
        else {
            console.log("compromissos na agenda:");
            this.compromissos.forEach((compromisso, index) => {
                console.log(`${index + 1}. ${compromisso}`);
            });
        }
    }
}
let Agenda1 = new Agenda(["comer", "tomar banho"]);
Agenda1.adicionarCompromisso("reunião às 20h");
Agenda1.listarCompromissos();
//# sourceMappingURL=index.js.map