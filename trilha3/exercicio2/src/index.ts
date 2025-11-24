abstract class FiguraGeometrica {
    abstract calcularArea(): number
}

class Circulo extends FiguraGeometrica{
    private raio: number;
    
    constructor(raio:number){
        super();
        this.raio = raio;

    }

    calcularArea(): number {
        return Math.PI * Math.pow(this.raio,2);
    }
}

class Quadrado extends FiguraGeometrica{
    private lado: number;

    constructor(lado: number){
        super();
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}
class Triangulo extends FiguraGeometrica{
    private base: number;
    private altura: number;

    constructor(base:number,altura:number){
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

function mostrarAreas(figuras: FiguraGeometrica[]): void {
    figuras.forEach((figura, index) => {
        console.log(`Figura ${index + 1}: Área = ${figura.calcularArea()}`);
    });
}

const figuras: FiguraGeometrica[] = [
     new Circulo(7),
     new Quadrado(5),
     new Triangulo(8, 2)
]

mostrarAreas(figuras)