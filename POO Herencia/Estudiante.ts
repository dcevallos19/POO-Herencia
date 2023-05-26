import {Persona} from '../POO Herencia/Persona'
export class Estudiante extends Persona {
     curso:String;

     estudiante (curso=" "){
          this.Curso=curso;
      }
      set Curso(value:String){
          this.curso=value;
       }
      get Curso(){
          return this.curso;
     }
     nuevoCurso (cambioCurso : String){
           this.curso=cambioCurso;
     }
     SalidadatosEstudiante(){
         return ("Los datos son: "+this.nombres+"," +this.apellidos+"," +this.curso);
     }
}
