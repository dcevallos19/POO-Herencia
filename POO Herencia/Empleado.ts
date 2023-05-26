import {Persona} from '../POO Herencia/Persona'
export class Empleado extends Persona {
    tipo:String;
    anioIncorporacion:number;
    numeroDespacho:number;

    empleado(tipo="", anioIncorporacion=0, numeroDespacho=0){
        this.tipo=tipo;
        this.anioIncorporacion=anioIncorporacion;
        this,numeroDespacho=numeroDespacho;
    }
    set Tipo(value:String){
        this.tipo=value;
    }
    get Tipo(){
        return this.tipo
    }
    set AnioIncorporacion(value:number){
        this.anioIncorporacion=value;
    }
    get Anioincorporacion(){
        return this.anioIncorporacion;
    }
    set Numerodespacho(value:number){
        this.numeroDespacho=value;
    }
    get Numerodespacho(){
        return this.numeroDespacho;
    }
    cambioDespacho(nuevoDespacho:number){
        this.numeroDespacho=nuevoDespacho;
    }
    SalidaDatosEmpleados(){
        return("Los datos son: "+this.nombres+"," +this.apellidos+"," +this.tipo+"," +this.anioIncorporacion+"," +this.numeroDespacho) 
    }
    }