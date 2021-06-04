import { httpServer } from "../main.js";
import { Server } from "socket.io";

export default {
    start() {
        const io = new Server(httpServer);

        io.on("connection", (socket) => {
            console.log(`[${new Date().toISOString()}] socket-server: A new connection has been established`);
        })
    }
}