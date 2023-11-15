import fs from "node:fs";
import { v4 as uuid } from "uuid";

interface Libro {
    id?: string;
    nombre: string;
    lanzamiento: number;
    rating: number;
    atp: boolean;
}

// La base de datos del libro
const parsedData = JSON.parse(fs.readFileSync("./db/books.json", "utf8"));

//---- FUNCIONES ----//

const mostrarLibros = () => {
    const mappedData = parsedData.map((libro: Libro) => {
      const nuevaLibro = {
        id: libro.id,
        nombre: libro.nombre,
        lanzamiento: libro.lanzamiento,
        rating: libro.rating,
        atp: libro.atp
      };
      return nuevaLibro;
    });
    return mappedData;
};

const mostrarLibro = (id: string): Libro | string => {
    const libroEncontrado = parsedData.find((libro: Libro) => {
      if (libro.id === id) {
        return libro;
      }
    });
    if (libroEncontrado === undefined) {
      return `No se encontró ningún libro con el id -> ${id}`;
    }
    return libroEncontrado;
};

const agregarLibro = (libro: Libro): string => {
    const foundBook = parsedData.find(
      (book: Libro) => book.nombre === libro.nombre
    );
    if (!foundBook) {
      libro.id = uuid();
      parsedData.push(libro);
      const jsonData = JSON.stringify(parsedData);
      fs.writeFileSync("./db/books.json", jsonData);
      return `El Libro "${libro.nombre}" (id:${libro.id}) fue agregado con éxito.`;
    } 
    else {
      return `El Libro "${libro.nombre}" (id:${libro.id}) ya existe en la base de datos. No se puede volver a agregar`;
    }
};  

const borrarLibro = (id: string): string => {
    let libroBorrado: Libro | undefined;
    const nuevoArrayDeLibros: Libro[] = parsedData.filter(
      (libro: Libro) => {
        if (libro.id !== id) {
          return libro;
        } else {
          libroBorrado = libro;
        }
      }
    );
    const jsonData = JSON.stringify(nuevoArrayDeLibros);
    fs.writeFileSync("./db/books.json", jsonData);
    if (libroBorrado) {
      return `El libro "${libroBorrado?.nombre}" (id: ${libroBorrado?.id}) fue borrado con éxito.`;
    } else {
      return `El id:${id} no existe en la base de datos. No se borró nada.`;
    }
};

export {mostrarLibros, mostrarLibro, agregarLibro, borrarLibro}