import {
  mostrarPelicula,
  mostrarPeliculas,
  agregarPelicula,
  borrarPelicula,
  Pelicula,
} from "./peliculas";

const nuevaPelicula: Pelicula = {
  id: 9,
  nombre: "Matrix",
  rating: 10,
};

const pelicula = mostrarPelicula(1);
const peliculaAgregada = agregarPelicula(nuevaPelicula);

const peliculaBorrada = borrarPelicula(3);
const peliculas = mostrarPeliculas();

console.log(peliculaAgregada);