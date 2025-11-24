class Temperatura{
    private valorCelsius: number;

    constructor(valorCelsius: number){
        this.valorCelsius = valorCelsius
    }
    calcularFahrenheit(): void{
        console.log((this.valorCelsius * 1,8) + 32); 
    }
    calcularKelvin(): void {
        console.log(this.valorCelsius + 273,15);
    }
}
let Temperatura1 = new Temperatura(22);
console.log(Temperatura1.calcularFahrenheit);
console.log(Temperatura1.calcularKelvin);
