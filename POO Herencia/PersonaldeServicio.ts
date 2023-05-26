import {Empleado} from './Empleado'
export class PersonaldeServicio extends Empleado{
    seccion:String;

    PersonaldeServicio(seccion=""){
        this.seccion=seccion;
    }
    set Seccion(value:String){
        this.seccion=value;
    }
    get Seccion(){
        return this.seccion;
    }
    cambioSeccion(nuevaSeccion:String){
        this.seccion=nuevaSeccion;
    }
    SalidadedatosPersonaldeServicio(){
        return("Los datos son: "+this.nombres+"," +this.apellidos+"," +this.seccion);
    }
}