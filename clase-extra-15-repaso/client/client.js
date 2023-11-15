import net from "node:net";
import dotenv from "dotenv";
dotenv.config();

const options = {
    port: process.env.PORT,
    host: process.env.HOST
};

const clientTCP = net.connect(options);

clientTCP.on("connect", () => {
    console.log("Cliente conectado al servidor");

    const request = process.argv.splice(2);
    clientTCP.write(JSON.stringify(request))

    clientTCP.end()
});

clientTCP.on("data", () => {
    console.log("El server me mandó un mensaje")
})


