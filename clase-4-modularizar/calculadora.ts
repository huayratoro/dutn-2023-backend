// aqui estan todas las funcionalidad des de la calculadora
// jamas hay un clg, print, etc.. es solo una funcion que se exporta

const sumar = (n1: number, n2: number): number => {
    return n1+n2;
};

const restar = (n1: number, n2: number): number => {
    return n1-n2;
};

export { sumar, restar }