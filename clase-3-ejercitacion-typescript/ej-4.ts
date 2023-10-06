// Ejercicio 4: Conversión de temperatura

// Escribe un programa que convierta una temperatura en grados Celsius a grados Fahrenheit.

const degToFar = (degreeC: number): number => {
    let conversion: number = (degreeC * 9/5) + 32
    return conversion
}

console.log(degToFar(30))