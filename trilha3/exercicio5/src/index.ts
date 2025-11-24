abstract class Funcionario {
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    public getNome(): string {
        return this.nome;
    }

    public getSalario(): number {
        return this.salario;
    }

    public abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
    public calcularBonus(): number {
        return this.getSalario() * 0.10;
    }
}

class Operario extends Funcionario {
    public calcularBonus(): number {
        return this.getSalario() * 0.05; 
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(func => {
        const salarioFinal = func.getSalario() + func.calcularBonus();
        console.log(`${func.getNome()} - Salário Final: R$ ${salarioFinal.toFixed(2)}`);
    });
}

const funcionarios: Funcionario[] = [
    new Gerente("Ana", 5000),
    new Operario("Carlos", 2000),
    new Operario("Maria", 2500)
];

calcularSalarioComBonus(funcionarios);
