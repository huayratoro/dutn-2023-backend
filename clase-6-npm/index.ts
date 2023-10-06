import {
  mostrarPelicula,
  mostrarPeliculas,
  agregarPelicula,
  borrarPelicula,
  Pelicula,
} from "./peliculas";

// instalar ese paquete con 
// npm i --save-dev @types/node

// captura las llamadas por consola
const params = process.argv

// de acuerdo a lo llamado, devuelve cada cosa
if (params[2] === 'getFilms'){
  console.log(mostrarPeliculas())
} else if (params[2] === 'getFilm') {
  console.log(mostrarPelicula(Number(params[3])))  
} else {
  console.log('Peticion incorrecta');
};