// Declarar las funciones, convertirlas a módulos y exportarlas

const moduloUno = (n1: number, n2: number): number => {
  return n1 + n2;
};

const moduloDos = (n: number): number => {
  return n ** 2;
};

export { moduloUno, moduloDos };
