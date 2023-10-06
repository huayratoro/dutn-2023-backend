// Escribe un programa que tome dos números como entrada y realice la suma de esos dos números.

const suma = (n1: number, n2: number): number => {
    let resultadoSuma:number = n1 + n2
    return resultadoSuma
}

// Escribe un programa que tome dos números como entrada y realice la resta de esos dos números.

const resta = (n1:number, n2:number): number => {
    let resultadoResta: number = n1-n2
    return resultadoResta
}

// Escribe un programa que tome dos números como entrada y realice la división de esos dos números. Ten en cuenta que no se puede dividir por 0.

const division = (numerador: number, denominador:number): 
number | string => {
    if (denominador == 0) {
        return "inf"
    } else {
    let resultadoDivision: number = numerador / denominador
    return resultadoDivision
}
} 

// Escribe un programa que tome dos números como entrada y realice la multiplicación de esos dos números.

const multiplicacion = (n1: number, n2: number): number => {
    let resultadoMultiplicar: number = n1 * n2
    return resultadoMultiplicar
}

// Escribe un programa que tome dos números como entrada y realice la potencia de esos dos números. Esta función tomará la base y el exponente como parametros.

const potenciacion = (base:number, potencia: number): number => {
    let resultadoPotenciacion:number = base ** potencia
    return resultadoPotenciacion 
}

