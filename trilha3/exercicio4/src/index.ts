class Animal {
    private energia: number;

    constructor(energiaInicial: number = 50) {
        this.energia = energiaInicial;
    }

    protected alterarEnergia(valor: number): void {
        this.energia += valor;
        if (this.energia < 0) {
            this.energia = 0;
        }
    }

    public statusEnergia(): void {
        console.log(`Nível de energia: ${this.energia}`);
    }

    public comer(): void {
        this.alterarEnergia(10);
        console.log("O animal está comendo.");
    }
}

class Leao extends Animal {
    public comer(): void {
        console.log("O leão vai caçar...");
        this.alterarEnergia(-20); 
        console.log("O leão conseguiu caçar e está se alimentando!");
        this.alterarEnergia(40); 
    }
}

class Passaro extends Animal {
    public comer(): void {
        console.log("O pássaro encontrou sementes e está se alimentando.");
        this.alterarEnergia(15); 
    }
}

// Função que usa polimorfismo
function alimentarAnimais(animais: Animal[]): void {
    animais.forEach((animal, index) => {
        console.log(`--- Animal ${index + 1} ---`);
        animal.comer();
        animal.statusEnergia();
        console.log("");
    });
}

// Testando
const animais: Animal[] = [
    new Leao(60),
    new Passaro(30),
    new Leao(40),
    new Passaro(50)
];

alimentarAnimais(animais);
