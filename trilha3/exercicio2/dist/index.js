"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FiguraGeometrica {
}
class Circulo extends FiguraGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2);
    }
}
class Quadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
}
class Triangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
function mostrarAreas(figuras) {
    figuras.forEach((figura, index) => {
        console.log(`Figura ${index + 1}: Área = ${figura.calcularArea()}`);
    });
}
const figuras = [
    new Circulo(7),
    new Quadrado(5),
    new Triangulo(8, 2)
];
mostrarAreas(figuras);
//# sourceMappingURL=index.js.map