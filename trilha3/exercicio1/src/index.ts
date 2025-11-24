class veiculo{
    mover(): void {
        console.log("O veículo está se mexendo");
    }
}
class carro extends veiculo{
    mover(): void {
        console.log("O carro está se movendo");
    }
}
class bicicleta extends veiculo{
    mover(): void {
        console.log("A bicicleta está se movendo");
    }
}
const carro1 = new carro;
const bicicleta1 = new bicicleta;

carro1.mover();
bicicleta1.mover();