import socket from "./services/socket.js";
import middleware from "./services/middleware.js";
import mongo from "./services/mongo.js";
import router from "./services/router.js";

import express from "express";
import { createServer } from 'http';

const app = express();
const httpServer = createServer(app);

// Initialize MongoDB, Socket.io and API Middlewares & Routes
mongo.start();
socket.start(httpServer);
middleware.use(app);
//router.create(app);

httpServer.listen(3000);
console.log("Server running on port *:3000!");