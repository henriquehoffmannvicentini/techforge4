class Agenda{
    private compromissos: string[];
    constructor(compromissos: string[]){
        this.compromissos = compromissos
    }
    adicionarCompromisso(compromisso: string): void{
        this.compromissos.push(compromisso);
    }
    listarCompromissos(): void{
        if(this.compromissos.length === 0){
            console.log("nenhum compromisso na agenda");
        }else{
            console.log("compromissos na agenda:");
            this.compromissos.forEach((compromisso, index) => {
                console.log(`${index+1}. ${compromisso}`);
            });
        }
    }
}
let Agenda1 = new Agenda(["comer", "tomar banho"]);
Agenda1.adicionarCompromisso("reunião às 20h")
Agenda1.listarCompromissos();