const totalArgs = process.argv;

// para recortar las rutas iniciales de la funcion
const args = totalArgs.splice(2);

const accion = args[0];
const param = args[1];
const valor = args[2];

console.log(accion, param, valor);
