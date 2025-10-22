//actividad integradora
//vamos a construir un auto -> motor, frenos, remolcar, partes
// moto -> tipos de motor
// Partes -> chasis, ruedas
//remolcable -> gancho de remolque

//interfacess
export interface Motor {
    arrancar(): void;
    apagar(): void;
    estaEncedido: boolean
}

interface Frenable {
    frenar():void
}

interface Remolcable {
    enganchar( objeto: string): void;
    desengancar(): void
}

export interface Parte {
    describir(): void
}
