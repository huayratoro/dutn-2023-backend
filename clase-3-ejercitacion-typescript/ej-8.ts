// Ejercicio 8: Validar contraseña

// Escribe un programa que valide si una contraseña ingresada por el usuario cumple con ciertos criterios (por ejemplo, al menos 8 caracteres de longitud).

const verificaPass = (pass: string): string => {
    if (pass.length < 8) {
        return `La contraseña posee menos de 8 caracteres`
    } else {
        return "Registro exitoso"
    }
}