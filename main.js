import { strings } from "./constants/consoleStrings.js";
import middleware from "./services/middleware.js";
import socket from "./services/socket.js";
import mongo from "./services/mongo.js";
import router from "./services/router.js";
import passport from "./services/passport.js";

import express from "express";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

// * Initialize MongoDB, Socket.io and API Middlewares & Router
async function init() {
    //await Promise.all([middleware.use(), passport(), router.create(), socket.start(httpServer)])
    await mongo.start();
    middleware.use();
    passport();
    router.create();
    socket.start(httpServer);
}

init().then(() => {
    httpServer.listen(3000);
    console.log(`[${strings.date}] ${strings.server_start}`);
})
.catch((error) => {
    console.log(`[${strings.date}] ${strings.error} ${error.stack}`);
    process.exit();
})

export { app, httpServer };