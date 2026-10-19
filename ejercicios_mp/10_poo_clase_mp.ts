class Colaborador {
    public nombre: string;
    public salario: number;
    public horasTrabajadas: number;

    constructor(
        nombre: string,
        salario: number,
        horasTrabajadas: number,
    ) {
        this.nombre = nombre;
        this.salario = salario;
        this.horasTrabajadas = horasTrabajadas;
    }

    registrarAsistencia(): void {
        console.log(`${this.nombre} registró su asistencia`);
    }

    recibirAumento(): void {
        this.salario += 100;
        console.log(`${this.nombre} recibió un aumento`);
    }
}

const colaboradorAna = new Colaborador("Ana Torres", 1500, 40);
const colaboradorLuis = new Colaborador("Luis Pérez", 1800, 40);

colaboradorAna.registrarAsistencia();
colaboradorLuis.recibirAumento();