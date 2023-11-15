import net from "node:net";
import dotenv from "dotenv";
import { moduloUno } from "./controller/controller"
dotenv.config();

const PORT = process.env.PORT;

const serverTCP = net.createServer();

serverTCP.on("connection", (socket) => {
    
    socket.on("data", (data) => {
        const request = JSON.parse(data.toString());
        let response;

        if(request[0] === "get" && request[1] === "all"){
            console.log("El cliente quiere la lista completa de peliculas.")
        }
        else if(request[0] === "moduloUno") {
            const suma = moduloUno(Number(request[1]), Number(request[2]));
            socket.write(JSON.stringify(suma));
        } 
        else if(request[0] === "get" && request[1] === "id"){
            console.log(`El cliente quiere la pelicula con id="${request[2]}"`)
        }
        else if(request[0] === "add"){
            console.log("entre")
            if(request[8] === "true"){
                console.log("El cliente quiere agregar la pelicula " + request[2] + " estrenada en " + request[4] + ", rateada en " + request[6] + " ATP.");
            } else if(request[8] === "false"){
                console.log("El cliente quiere agregar la pelicula " + request[2] + " estrenada en " + request[4] + ", rateada en " + request[6] + " NO APTA para todo público.");
            } 
        }
        else if(request[0] === "delete"){
            console.log(`El cliente quiere borrar la pelicula con el id="${request[2]}" de la base de datos.`)
        } else {
            response = "Petición incorrecta";
            socket.write(JSON.stringify(response));
        } 
    });

    socket.on("close", () => {
        console.log("Cliente desconectado");
    });

    socket.on("error", () => {
        console.log("Error del cliente");
    });

});

serverTCP.listen(PORT, () => {
    console.log(`Servidor conectado en el puerto ${PORT}`);
});