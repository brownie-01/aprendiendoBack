//abstraccioon -> cultar la complejidad
// encapsulamieto   

class humano {
    nombre: string;
    edad: number;
    peso: number;

    constructor(nombre: string, edad: number,peso: number){
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
    }

    calcularPeso(): number {
        return this.peso + 2
    } 
}

let tomas = new humano("mateo",20, 60)