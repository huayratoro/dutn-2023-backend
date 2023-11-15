import {readData, writeData} from "../utils/utils.js";

//---------------
const getPizzas = () => {
    const pizzas = readData();
    return pizzas
};
//---------------
const getPizzasById = (id) => {
    const pizzas = readData();
    const pizza = pizzas.find((pizza) => pizza.id === id)
    return pizza
};
//---------------
const addPizza = (newPizza) => {
    const pizzas = readData();
    const pizza = pizzas.find((pizza) => pizza.nombre === newPizza.nombre)
    if (pizza) {
        return "La pizza ya existe!"
    } else {
        pizzas.push(newPizza);
        writeData(JSON.stringify(pizzas));
        return "Pizza agregada con exito"
    }
};
//---------------
const deletePizzasById = (id) => {
    const pizzas = readData();
    const nuevoArray = pizzas.filter((pizza) => pizza.id !== id);
    writeData(JSON.stringify(nuevoArray));
    return "Pizza borrada con éxito"
};
//---------------
//---------------
export { getPizzas, getPizzasById, addPizza, deletePizzasById }