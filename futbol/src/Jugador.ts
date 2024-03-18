import { Persona } from "./Persona";
import { PosicionJugador } from "./PosicionJugador";
import { Equipo } from "./Equipo";

export abstract class Jugador extends Persona {
    public posicion: PosicionJugador;
    public club: Equipo;
    public historial: Set<Equipo>;
    public numeroCamiseta: number;
    constructor(nombre: string, apellido: string, nacimiento: Date, dni: number, club: Equipo, posicion: PosicionJugador, numeroCamiseta: number) {
        super(nombre, apellido, nacimiento, dni);
        this.club = club;
        this.posicion = posicion;
        this.numeroCamiseta = numeroCamiseta;
        this.historial = new Set<Equipo>();
    }
    abstract verificar(): boolean;
    abstract actualizarEstadisticas(p1: number, p2: number, p3: number): void;
}