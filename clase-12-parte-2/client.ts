import net from "node:net"
import dotenv from "dotenv";
dotenv.config();

const OPTIONS = {
    port: process.env.PORT,
    host: process.env.HOST
};

const clientTCP = net.connect(OPTIONS);

clientTCP.on("connect", () => {
    console.log("Conectado al servidor");

    const request = JSON.stringify(process.argv.splice(2));

    clientTCP.write(request);

    clientTCP.end()
})

clientTCP.on("data", (data) => {
    const response = JSON.parse(data.toString());
    console.log(response);
    clientTCP.end()
})