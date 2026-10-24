interface ParticipanteTorneo{
    nombre: string;
    nivelPoder: number;
    presentarTecnica(): void;
    transformacion():void;
}

class Devo implements ParticipanteTorneo{
    nombre = "Andy";
    nivelPoder = 9000;
    presentarTecnica(): void {
        console.log("Andy utiliza el Kamekamehe")
    }
    transformacion(): void{
        console.log("Tranformacion")
    }
}

class Vevo implements ParticipanteTorneo{
    nombre = "Cesar";
    nivelPoder = 8500;
    presentarTecnica(): void {
        console.log("Devo utiliza el Final Flash")
    }
    transformacion(): void {
        console.log("Tranformacion Vevo")
    }
}

const devo = new Devo();
const vevo = new Vevo();

vevo.presentarTecnica();
devo.presentarTecnica();
vevo.transformacion();
devo.transformacion(); 