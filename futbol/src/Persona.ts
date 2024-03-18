export class Persona {
    public nombre: string;
    public apellido: string;
    public nacimiento: Date;
    public dni: number;
    constructor(nombre: string, apellido: string, nacimiento: Date, dni: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacimiento = nacimiento;
        this.dni = dni;
    }
    public calcularEdad(): number {
        let hoy = new Date();
        let edad = hoy.getFullYear() - this.nacimiento.getFullYear();
        let mes = hoy.getMonth() - this.nacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.nacimiento.getDate())) {
            edad--;
        }
        return edad;
    }
}