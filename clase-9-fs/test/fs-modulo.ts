// Crear un sistema que agregue nombres a la base de datos. No permite nombres ya existentes
import { agregarNombre } from "./filesystem";

const nombre = process.argv[2];

const respuesta = agregarNombre(nombre);

console.log(respuesta);
