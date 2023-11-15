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

export { readData, writeData };