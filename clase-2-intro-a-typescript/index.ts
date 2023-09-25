// Los scripts se ejecutan con ts-node script.ts

// Tipado
// los tipos pueden ser string number
let nombre:string = "Marcos";
let edad:number = 27

// tipo mixto
type mixto = string | number | boolean

let dato: mixto = true

// arrays
const nombres: string[] = ["este", "es", "un", "array"]
const numeros: number[] = [1,2,3,4]

// permitir tipos de datos en un array
type datosMixtosArray = string | number | boolean
const datos: datosMixtosArray[] = ['string', 1, true]

//interfaces
interface Persona {
    nombre: string,
    edad: number,
    gustosHelado: string[],
    tieneAuto: boolean
}

const marcos: Persona = {
    nombre: "marcos", edad: 27, gustosHelado: ["limon", "maracuya"], tieneAuto:true
}

// extends toma todas las propiedades de alguna interface y las amplia con nuevas 
interface Comunidad extends Persona {
    ciudad: string,
    idioma: string,
    numeroPoblacion: number
}

// enums : enumeraciones posibles
// para credenciales/acceso a db
enum DiasDeLaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

// funciones //

const saludar = (saludo: string): string => {   // void seria que la funcion no returna nada
    return(
        `Output: ${saludo}`
    )
}

// buble para arrays
// nombres.forEach((e: string) => {
//     console.log(e)
// })

const nombreCompletos = nombres.map((nombre:string, indice:number) => {
    const obj: object = {
        nombre, indice
    }
    return(obj)
})

console.log(nombreCompletos)
