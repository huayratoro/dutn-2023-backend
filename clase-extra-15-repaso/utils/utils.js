import fs from "node:fs";

// obtener data
const readData = () => {
    const jsonData = fs.readFileSync("./database/pizza.json");
    const pizzas = JSON.parse(jsonData);
    return (pizzas);
};

const writeData = (jsonData) => {
    fs.writeFileSync("./database/pizza.json", jsonData);    
};

const transformarCadenaAArray = (cadena) => {
    // Eliminar corchetes y separar los elementos por comas
    cadena = cadena.replace("[", "").replace("]", "").split(",");
    // Utilizar map() para eliminar los espacios en blanco y obtener el array final
    let arrayFinal = cadena.map(elemento => elemento.trim());

    return arrayFinal;
}

export { readData, writeData, transformarCadenaAArray };