import chalk from "chalk";
import { Server } from "socket.io";

export default {
    start(server) {
        const io = new Server(server);

        io.on("connection", (socket) => {
            console.log(chalk.black.bgBlueBright("Client connection has been established!"));
        })
    }
}