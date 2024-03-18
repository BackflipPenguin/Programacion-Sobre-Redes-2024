import { Jugador } from "./Jugador";
import { Equipo } from "./Equipo";
import { PosicionJugador } from "./PosicionJugador";

export class Arquero extends Jugador {
    public atajadas: number;
    public golesRecibidos: number;
    constructor(nombre: string, apellido: string, nacimiento: Date, dni: number, club: Equipo, numeroCamiseta: number) {
        super(nombre, apellido, nacimiento, dni, club, PosicionJugador.Arquero, numeroCamiseta);
        this.atajadas = 0;
        this.golesRecibidos = 0;
    }
    porcentajeAtajadas(): number {
        return 100 / this.golesRecibidos * this.atajadas;
    }
    verificar(): boolean {
        if (this.porcentajeAtajadas() <= 60 || this.golesRecibidos >= 10) {
            return false;
        }
        return true;
    }
    actualizarEstadisticas(p1: number, p2: number, p3: number): void {
        this.atajadas = p1;
        this.golesRecibidos = p2;
    }
}