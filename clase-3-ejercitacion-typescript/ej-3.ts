// Ejercicio 3: Verificar si un número es par o impar

// Escribe un programa que tome un número como entrada y determine si es par o impar.

const parImpar = (numero: number): string => {
    let preguntaParImpar = numero % 2
    if (preguntaParImpar == 0) {
        return `El número ${numero} es PAR`
    } else {
        return `El número ${numero} es IMPAR`
    }
}