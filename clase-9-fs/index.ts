// npm i --save-dev @types/node
import {
  mostrarPelicula,
  mostrarPeliculas,
  agregarPelicula,
  borrarPelicula,
  Pelicula,
} from "./peliculas";

// totalArgs siempre sera un array que contiene los parametros pasados por la terminal como string
// Si paso un número, este también será un string
const totalArgs = process.argv;
const args = totalArgs.splice(2);
// ["--deleteFilm", "id", "CdEfGhIjK"]; <-- argumentos por consola
// console.log(args);

const action = args[0];
const paramId = args[1]; // "askdfhkajs" -> vedadero | "" -> false
const valueId = args[2];
// para agregar una nueva pelicula en la base de datos la petición deberá ser asi:
// --createNewFilm id jkio32kr3 nombre ET rating 10
const paramName = args[3];
const valueName = args[4];
const paramRating = args[5];
const valueRating = args[6];

// ts-node index.ts --getFilms
if (action === "--getFilms" && args.length === 1) {
  const films = mostrarPeliculas();
  console.log(films);
  // ts-node index.ts --getFilm id TuVwXyZaB
} else if (action === "--getFilm" && paramId === "id") {
  const film = mostrarPelicula(valueId);
  console.log(film);
  // ts-node index.ts --deleteFilm id TuVwXyZaB
} else if (action === "--deleteFilm" && paramId === "id") {
  const status = borrarPelicula(valueId);
  console.log(status);
  // ts-node index.ts --createNewFilm id jkio32kr3 nombre ET rating 10
} else if (
  action === "--createNewFilm" &&
  paramName === "nombre" &&
  paramRating === "rating"
) {
  const status = agregarPelicula({
    nombre: valueName,
    rating: valueRating,
  });
  console.log(status);
} else {
  console.log("Ingresa correctamente los datos");
}
