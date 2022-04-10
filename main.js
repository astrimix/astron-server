import express from "express";
import { Server as HTTPServer } from "http";
import { Server as SocketServer } from "socket.io";
import {
  Express,
  Logger,
  MongoDB,
  Passport,
  Events,
} from "./services/index.js";

const server = new HTTPServer();
const ioServer = new SocketServer();
const app = express();

const logger = new Logger();
if (process.env.LOGGER === "true") logger.status = 1;
Events.listen();

MongoDB.start();

let passport = Passport.init();
Express.start(app, passport);

server.listen(3000);
export { logger, server, ioServer };
