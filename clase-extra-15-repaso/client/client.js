import net from "node:net";
import dotenv from "dotenv";
dotenv.config();

const options = {
    port: process.env.PORT,
    host: process.env.HOST
};

const clientTCP = net.connect(options);

clientTCP.on("connect", () => {
    const request = process.argv.splice(2);
    clientTCP.write(JSON.stringify(request))
});

clientTCP.on("data", (jsonData) => {
    const data = JSON.parse(jsonData.toString());
    console.log(data);
    clientTCP.end()
})


