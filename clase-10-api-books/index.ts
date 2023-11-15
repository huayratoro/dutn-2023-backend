// librerias
import {
    mostrarLibros,
    mostrarLibro,
    agregarLibro,
    borrarLibro
} from "./functions";

// argumentos
const args = process.argv.splice(2);

// solo desgloso el primer argumento que hace referencia a la accion
const action = args[0];

//---- ejecucion de funciones a demanda ----//
if (action === "--get" && args[1] === "all") {
    console.log(mostrarLibros());
} 
//----//
else if (action == "--get" && args[1] === "id") {
    console.log(mostrarLibro(args[2]))
} 
//----//
else if (action === "--add" && args[1] === "nombre" && args[3] === "lanzamiento" && args[5] === "rating" && args[7] === "atp") {
    const status = agregarLibro({
        nombre: args[2],
        lanzamiento: Number(args[4]),
        rating: Number(args[6]),
        atp: Boolean(args[8])
    })
    console.log(status)
} 
//----//
else if (action === "--delete" && args[1] === "id") {
    console.log(borrarLibro(args[2]))
} 
//----//
else {
    console.log("Los parametros no fueron bien ingresados")
}