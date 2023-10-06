// Todos los ejercicios deben resolverse con una fucion y TODAS deben retornar el resultado, no mostrarlo por consola

const sumar = (n1: number, n2: number): number => {
    let resultado: number = n1 + n2
    return resultado 
};

const resultadoSuma:number = sumar(1, 1);

// se ejecuta con ts-node syma.ts

console.log(resultadoSuma)