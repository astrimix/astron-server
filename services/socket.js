import { strings } from "../constants/consoleStrings.js";
import { httpServer } from "../main.js";
import { Server } from "socket.io";

export default {
    start() {
        const io = new Server(httpServer);

        io.on("connection", (socket) => {
            console.log(`[${strings.date}] ${strings.socket_new}`);
        })
    }
}