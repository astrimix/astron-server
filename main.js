import express from "express";
import { Server as HTTPServer } from "http";
import { Server as SocketServer } from "socket.io";
import {
  Logger,
  Events,
  MongoDB,
  Passport,
  Express,
} from "./services/index.js";

const logger = new Logger();
if (process.env.LOGGER === "true") logger.status = 1;

const app = express();
const server = new HTTPServer(app);
const ioServer = new SocketServer(server);

Events.http.listen(server);
Events.socket.listen(ioServer);
Events.mongo.listen();

await MongoDB.start();

let passport = Passport.init();
Express.middlewares.init(app);
Express.router.init(app, passport);

server.listen(3000);
export { logger };
