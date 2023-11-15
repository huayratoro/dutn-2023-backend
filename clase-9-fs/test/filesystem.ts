// Importando file system que me deja manipular la data de un archivo
import fs from "node:fs";

const agregarNombre = (nombreNuevo: string) => {
  // Leyendo la data de nombres.json. Retorna un json (string)
  const data = fs.readFileSync("./test/nombres.json", "utf8");

  // Necesito parsear la data para modificarla. No puedo hacer un push a un string. Necesito un array
  const parsedData = JSON.parse(data);

  // const nombreEncontrado = parsedData.find((nombre: string) => {
  //   if (nombre === nombreNuevo) {
  //     return nombre;
  //   }
  // });

  // true si existe o false si no existe
  const nombreEncontrado = parsedData.includes(nombreNuevo);

  // Si nombreEncontrado es true quiere decir que el nombre ya existe por ende corto el proceso de la función mediante un return
  if (nombreEncontrado) {
    return `El nombre ${nombreNuevo} ya existe en la base de datos.`;
  }

  // Agrega el nombre que el usuario paso por parametro de la terminal
  parsedData.push(nombreNuevo);

  // Convierto la data MODIFICADA a un string que es lo que necesita el método writeFileSync.
  const jsonData = JSON.stringify(parsedData);

  // Reescribimos la "base de datos"
  fs.writeFileSync("./test/nombres.json", jsonData);

  // Feedback para el usuario final
  return `El nombre ${nombreNuevo} se agrego con éxito a la base de datos.`;
};

export { agregarNombre };
