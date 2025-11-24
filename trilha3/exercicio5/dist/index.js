"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    getNome() {
        return this.nome;
    }
    getSalario() {
        return this.salario;
    }
}
class Gerente extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.10;
    }
}
class Operario extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.05;
    }
}
function calcularSalarioComBonus(funcionarios) {
    funcionarios.forEach(func => {
        const salarioFinal = func.getSalario() + func.calcularBonus();
        console.log(`${func.getNome()} - Salário Final: R$ ${salarioFinal.toFixed(2)}`);
    });
}
const funcionarios = [
    new Gerente("Ana", 5000),
    new Operario("Carlos", 2000),
    new Operario("Maria", 2500)
];
calcularSalarioComBonus(funcionarios);
//# sourceMappingURL=index.js.map