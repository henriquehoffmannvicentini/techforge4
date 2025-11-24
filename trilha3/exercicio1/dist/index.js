"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class veiculo {
    mover() {
        console.log("O veículo está se mexendo");
    }
}
class carro extends veiculo {
    mover() {
        console.log("O carro está se movendo");
    }
}
class bicicleta extends veiculo {
    mover() {
        console.log("A bicicleta está se movendo");
    }
}
const carro1 = new carro;
const bicicleta1 = new bicicleta;
carro1.mover();
bicicleta1.mover();
//# sourceMappingURL=index.js.map