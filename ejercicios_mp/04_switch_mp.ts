type Cargo =
  | "Gerente"
  | "Desarrollador"
  | "Contador"
  | "Recepcionista"
  | "Practicante";

let cargo: Cargo = "Desarrollador";

switch (cargo) {
    case "Gerente":
        console.log("Dirige un departamento");
        break;
    case "Desarrollador":
        console.log("Desarrolla y mantiene sistemas");
        break;
    case "Contador":
        console.log("Gestiona las finanzas de la empresa");
        break;
    case "Recepcionista":
        console.log("Atiende a clientes y visitantes");
        break;
    case "Practicante":
        console.log("Está en periodo de aprendizaje");
        break;
    default:
        console.log("Cargo desconocido");
}

type Departamento = "Ventas" | "TI" | "Finanzas";

let departamento: Departamento = "TI";
let metaCumplida: number = 85; // porcentaje
let tieneCertificacion: boolean = true;

switch (departamento) {
    case "Ventas":
        if (metaCumplida > 80 && tieneCertificacion) {
            console.log("Ventas: el empleado recibe comisión extra");
        } else {
            console.log("Ventas: el empleado recibe comisión normal");
        }
        break;
    case "TI":
        if (metaCumplida > 70 && tieneCertificacion) {
            console.log("TI: el empleado recibe bono por certificación");
        } else {
            console.log("TI: el empleado no recibe bono");
        }
        break;
    case "Finanzas":
        if (metaCumplida > 90 && tieneCertificacion) {
            console.log("Finanzas: el empleado recibe bono trimestral");
        } else {
            console.log("Finanzas: el empleado no recibe bono");
        }
        break;
    default:
        console.log("Departamento desconocido");
}