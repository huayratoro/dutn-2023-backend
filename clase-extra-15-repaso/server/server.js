import { getPizzas, getPizzasById, addPizza, deletePizzasById } from "../controllers/controller.js";
import net from "node:net";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

const serverTCP = net.createServer();

// validar las request del servidor
const processRequest = (req) => {
    const action = req[0]
    switch(action) {
        case "getPizzas": 
            return getPizzas();
        case "getPizzasById":
            return getPizzasById(Number(req[1]));
        case "addPizza":
            return addPizza(
                {
                    nombre: req[1],
                    id: Number(req[2]),
                    ingredientes: req[3],
                    precio: Number(req[4]),
                    tamaño: req[5]
                }
            );
        case "deletePizzasById":
            return deletePizzasById(Number(req[1]));
    };
};

serverTCP.on("connection", (socket) => {
    
    console.log("cliente conectado exitosamente");
    
    // Sockets //
    socket.on("close", () => {
        console.log("Cliente desconectado")
    });

    socket.on("error", () => {
        console.log("Se experimentó un error en la conección del cliente en el sistema")
    });

    socket.on("data", (dataClient) => {
        const data = JSON.parse(dataClient.toString())
        console.log("El cliente envio data al servidor")
    });

});

serverTCP.listen(port, () => {
    console.log("Servidor en escucha en el puerto " + port)
});

