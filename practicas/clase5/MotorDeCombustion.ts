import { Motor } from "./interface";



class MotorDeCombustion implements Motor {
    public estaEncedido: boolean = false;

    arrancar(): void {
        this.estaEncedido = true;
        console.log('El motor de combustion esta encendido')
    }

    apagar(): void {
        this.estaEncedido = false;
        console.log('El motor de combustion esta apagado')
    }

}