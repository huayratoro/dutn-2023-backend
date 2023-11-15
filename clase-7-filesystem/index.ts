import {
  mostrarPelicula,
  mostrarPeliculas,
  agregarPelicula,
  borrarPelicula,
  Pelicula,
} from "./peliculas";

// instalar ese paquete con 
// npm i --save-dev @types/node

// para mostrar elementos de una pelicula de forma dinamica
console.log(Object.values(mostrarPelicula(5))[Object.keys(mostrarPelicula(5)).findIndex(x => x === "rating")]);

// captura las llamadas por consola
const args = process.argv.splice(2);

const action = args[0];
const param = args[1];
const values = args[2];

// action --getFilms
if (action === "--getFilms" && !param) {
  const films = mostrarPeliculas();
  console.log(films);
// action --getFilm id 
} else if (action === "--getFilm" && param === "id") {
  const film = mostrarPelicula(Number(values));
  console.log(film);
// action --deleteFilm id
} else if (action === "--deleteFilm" && param === "id") {
  console.log(borrarPelicula(Number(values)));
// action --createNewFilm id
}
