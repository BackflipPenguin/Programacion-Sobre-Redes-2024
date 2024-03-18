import { Jugador } from "./Jugador";

export class Equipo {
    public nombre: string;
    public jugadores: Set<Jugador>;
    constructor(nombre: string) {
        this.nombre = nombre;
        this.jugadores = new Set<Jugador>();
    }
}