// Interface === molde
// Interface === contrato
interface Pelicula {
  id?: number;
  nombre: string;
  rating: number;
}

// 2 -> { id: 2, nombre: "El Padrino", rating: 9.2 }
let PELICULAS: Pelicula[] = [
  { id: 1, nombre: "Titanic", rating: 7.8 },
  { id: 2, nombre: "El Padrino", rating: 9.2 },
  { id: 3, nombre: "Star Wars: Episodio IV", rating: 8.6 },
  { id: 4, nombre: "Jurassic Park", rating: 7.9 },
  { id: 5, nombre: "ET", rating: 8.7 },
  { id: 6, nombre: "Manuelita", rating: 10 },
  { id: 7, nombre: "300", rating: 8 },
  { id: 8, nombre: "EL chavo", rating: 10 },
];

// Todos los módulos encargados de usar o manipular la data (PELICULAS)

// API -> CRUD -> create, read, update, delete

// getter
const mostrarPeliculas = (): Pelicula[] => {
  // Esta función debe RETORNAR el array completo de peliculas
  // Esta función retorta un array
  const mappedData = PELICULAS.map((pelicula) => {
    const nuevaPelicula = {
      nombre: pelicula.nombre,
      rating: pelicula.rating,
    };
    return nuevaPelicula;
  });

  return mappedData;
};

// getter
const mostrarPelicula = (id: number): Pelicula | false => {
  // Esta función debe RETORNAR la pelicula refente al id que se le pasa por parámetro
  // Esta función retorna un objeto o false en caso de que no exista
  // return de una pelicula, o que hacemos en caso de que la pelicula no exista?

  const peliculaEncontrada = PELICULAS.find((pelicula) => {
    if (pelicula.id === id) {
      return pelicula;
    }
  });

  if (peliculaEncontrada === undefined) {
    return false;
  }

  return peliculaEncontrada;
};

// setter
const agregarPelicula = (pelicula: Pelicula): string => { // recibe un objeto
  // Esta función debe agregar una pelicula pasada por parametro en el array de peliculas
  // Para indicar un caso exitoso (que la pelicula fue agregada) RETORNAR la pelicula agregada
  PELICULAS.push(pelicula);
  return "Pelicula agregada con exito";
};

// setter
const borrarPelicula = (id: number): string => {
  const nuevoArrayDePeliculas = PELICULAS.filter((pelicula) => {
    return pelicula.id !== id;
  });

  PELICULAS = nuevoArrayDePeliculas;

  return "La pelicula fue borrada con éxito.";
};

export {
  mostrarPelicula,
  mostrarPeliculas,
  agregarPelicula,
  borrarPelicula,
  Pelicula,
};
