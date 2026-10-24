interface EmpleadoRH {
    nombre: string;
    salario: number;
    presentarFuncion(): void;
    promocion(): void;
}

class GerenteRH implements EmpleadoRH {
    nombre = "Carlos Mendoza";
    salario = 2500;
    presentarFuncion(): void {
        console.log("Carlos Mendoza dirige el proceso de seleccion de personal");
    }
    promocion(): void {
        console.log("Carlos Mendoza es promovido a Director de Recursos Humanos");
    }
}

class AnalistaNomina implements EmpleadoRH {
    nombre = "Ana Torres";
    salario = 1800;
    presentarFuncion(): void {
        console.log("Ana Torres calcula y revisa la nomina mensual");
    }
    promocion(): void {
        console.log("Ana Torres es promovida a Coordinadora de Nomina");
    }
}

const gerente = new GerenteRH();
const analista = new AnalistaNomina();

analista.presentarFuncion();
gerente.presentarFuncion();
analista.promocion();
gerente.promocion();