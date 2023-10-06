// Ejercicio 6: Mayor de tres números

// Escribe un programa que tome tres números como entrada y determine cuál de ellos es el mayor.

const mayor = (arrayNumeros: number[]): string | number => {
    if (arrayNumeros.length != 3) {
        return `La longitud del array ingresado es distinta de 3`
    } else {
        return Math.max(...arrayNumeros)
    }
}