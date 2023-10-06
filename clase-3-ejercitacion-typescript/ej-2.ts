// Ejercicio 2: Saludo personalizado

// Escribe un programa que tome el nombre de una persona como entrada y realice un saludo personalizado.

const saludo = (nombre: string): string => {
    let saludo: string = `Hola ${nombre}, ¿cómo has estado?`
    return saludo
}