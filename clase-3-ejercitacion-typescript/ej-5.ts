// Ejercicio 5: Lista de nombres

// Crea una array de nombres e imprime cada nombre en la consola.

let nombres: string[] = ["Marcos", "Sol"];

const listaNombres = (arrayNombres: string[]): string[] => {
    const imprimeNombres: string[] = arrayNombres.map((nombre) => {
        let resultado: string = nombre
        return resultado
    })
    return imprimeNombres
} 

console.log(listaNombres(nombres))