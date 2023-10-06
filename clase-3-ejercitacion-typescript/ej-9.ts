// Ejercicio 9: Tabla de multiplicar

// Escribe un programa que genere la tabla de multiplicar de un número dado. Del 1 a 10.

const tablaMultiplicar = (num: number): number[] => {
    let resultado: number[] = []
    for (let i = 1; i <= 10; i++) {
        resultado[i-1] = num*i
    }
    return resultado
}