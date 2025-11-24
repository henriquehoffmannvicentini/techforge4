"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GerenciadorDeTarefas {
    constructor() {
        this.tarefas = new Set();
    }
}
class Projeto extends GerenciadorDeTarefas {
    constructor(nomeDoProjeto) {
        super();
        this.nomeDoProjeto = nomeDoProjeto;
    }
    adicionarTarefa(tarefa) {
        if (this.tarefas.has(tarefa)) {
            console.log(`A tarefa "${tarefa}" já existe no projeto "${this.nomeDoProjeto}".`);
            return;
        }
        this.tarefas.add(tarefa);
        console.log(`Tarefa "${tarefa}" adicionada ao projeto "${this.nomeDoProjeto}".`);
    }
    listarTarefas() {
        return Array.from(this.tarefas).map((t) => `[Projeto: ${this.nomeDoProjeto}] ${t}`);
    }
}
// Implementação da classe TarefasDiarias (tarefas diárias)
class TarefasDiarias extends GerenciadorDeTarefas {
    constructor(data) {
        super();
        this.data = data;
    }
    adicionarTarefa(tarefa) {
        if (this.tarefas.has(tarefa)) {
            console.log(`A tarefa diária "${tarefa}" já foi adicionada em ${this.data}.`);
            return;
        }
        this.tarefas.add(tarefa);
        console.log(`Tarefa diária "${tarefa}" adicionada em ${this.data}.`);
    }
    listarTarefas() {
        return Array.from(this.tarefas).map((t) => `[Dia: ${this.data}] ${t}`);
    }
}
const projeto = new Projeto("Sistema de Vendas");
projeto.adicionarTarefa("Criar banco de dados");
projeto.adicionarTarefa("Implementar autenticação");
projeto.adicionarTarefa("Criar banco de dados");
const tarefasDiarias = new TarefasDiarias("02/11/2025");
tarefasDiarias.adicionarTarefa("Revisar código");
tarefasDiarias.adicionarTarefa("Fazer backup");
tarefasDiarias.adicionarTarefa("Revisar código");
console.log("Lista de Tarefas do Projeto");
console.log(projeto.listarTarefas());
console.log("Lista de Tarefas Diárias");
console.log(tarefasDiarias.listarTarefas());
//# sourceMappingURL=index.js.map