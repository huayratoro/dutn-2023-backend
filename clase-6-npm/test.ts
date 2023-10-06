const peliculas = [
    { id: 1, nombre: "Titanic", rating: 7.8 },
    { id: 2, nombre: "El Padrino", rating: 9.2 },
    { id: 3, nombre: "Star Wars: Episodio IV", rating: 8.6 },
    { id: 4, nombre: "Jurassic Park", rating: 7.9 },
    { id: 5, nombre: "ET", rating: 8.7 },
    { id: 6, nombre: "Manuelita", rating: 10 },
    { id: 7, nombre: "300", rating: 8 },
    { id: 8, nombre: "EL chavo", rating: 10 },
];

const id = 9;

// Metodo find -> encuntra un solo objeto
const peliculaEncontrada = peliculas.find((pelicula) => {
    if(pelicula.id === id){
        return pelicula;
    }
});

// Metodo filter
const peliculasRankeadas = peliculas.filter((pelicula) => {
    if(pelicula.rating >= 9){
        return pelicula;
    }
});

console.log(peliculasRankeadas);