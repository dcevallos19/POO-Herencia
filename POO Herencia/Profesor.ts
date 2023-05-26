import {Empleado} from '../POO Herencia/Empleado'
export class Profesor extends Empleado{
    departamento:string;

    profesor(departamento:""){
        this.departamento=departamento;
    }
    set Departamento(value:string){
        this.departamento=value;
    }
    get Departamento(){
        return this.departamento;
    }
    cambioDepartamento(nuevoDepartamento:string){
        this.departamento=nuevoDepartamento;
    }
    SalidadatosProfesor(){
        return("Los datos son: "+this.nombres+"," +this.apellidos+"," +this.departamento);
    }
}