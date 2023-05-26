import {Persona} from '../POO Herencia/Persona'
import {Estudiante} from '../POO Herencia/Estudiante'
import {Empleado} from '../POO Herencia/Empleado'
import {Profesor} from '../POO Herencia/Profesor'
import {PersonaldeServicio} from '../POO Herencia/PersonaldeServicio'

const nuevaPersona=new Persona();
nuevaPersona.nombres="Douglas";
nuevaPersona.apellidos="Cevallos";
nuevaPersona.estadocivil="Soltero";
nuevaPersona.numeroIdentificacion= 1316896776;

const nuevoEstudiante=new Estudiante();
nuevoEstudiante.nombres="karol";
nuevoEstudiante.apellidos="Bonilla";
nuevoEstudiante.curso="Cuarto Semestre";

const nuevoEmpleado=new Empleado();
nuevoEmpleado.nombres="Pepito"
nuevoEmpleado.apellidos="Garcia";
nuevoEmpleado.tipo="Masculino";
nuevoEmpleado.anioIncorporacion=2021;
nuevoEmpleado.numeroDespacho=4102;
nuevoEmpleado.tipo="Terapia Ocupacional";

const nuevoProfesor=new Profesor();
nuevoProfesor.nombres="manuel";
nuevoProfesor.apellidos="Meza";
nuevoProfesor.departamento="Arquitectura";

const nuevoPersonaldeServicio=new PersonaldeServicio();
nuevoPersonaldeServicio.nombres="anthony";
nuevoPersonaldeServicio.apellidos="Saltos";
nuevoPersonaldeServicio.seccion="Chofer";

console.log(nuevaPersona.SalidaDatosPersona());
console.log(nuevoEstudiante.SalidadatosEstudiante());
console.log(nuevoEmpleado.SalidaDatosEmpleados());
console.log(nuevoProfesor.SalidadatosProfesor());
console.log(nuevoPersonaldeServicio.SalidadedatosPersonaldeServicio());