export class Persona{
    nombres:String;
    apellidos:String;
    numeroIdentificacion:number;
    estadocivil:String;

    constructor(nombres="", apellidos="", numeroIdentificacion=0, estadocivil=""){
         this.nombres=nombres;
         this.apellidos=apellidos;
         this.numeroIdentificacion=numeroIdentificacion;
         this.estadocivil=estadocivil;
    }
    set Nombres(value:String){
        this.nombres=value
    }
    get Nombres(){
        return this.nombres;
    }
    set Apellidos(value:String){
        this.apellidos=value;
    }
    get Apellidos(){
        return this.apellidos;
    }
    set NumeroIdentificacion(value:number){
        this.NumeroIdentificacion=value;
    }
    get NumeroIdentificacion(){
        return this.numeroIdentificacion;
    }
    set EstadoCivil(value:String){
        this.EstadoCivil=value;
    }
    get EstadoCivil(){
        return this.EstadoCivil;
    }
    cambioEstadoCivil(NuevoEstado:String){
        this.EstadoCivil=NuevoEstado;
    }
    SalidaDatosPersona(){
        return ("Los datos son: "+this.Nombres+"," +this.Apellidos+"," +this.EstadoCivil);
    }
}