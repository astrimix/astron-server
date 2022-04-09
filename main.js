import express from "express";
import { Server as SocketServer } from "socket.io";
import { Server as HttpServer } from "http";

import {
  EventService,
  Logger,
  MongoService,
  PassportService,
  ExpressService,
  DocsService,
} from "./services/index.js";

const expressApp = express();
const httpServer = new HttpServer();
const socketServer = new SocketServer(httpServer);

EventService.startListening(httpServer, socketServer);
if (process.env.LOGGER === "true") {
  var logger = new Logger();
}

const passport = PassportService.init();
MongoService.start();

ExpressService.start(expressApp, passport);
DocsService.init(expressApp);

httpServer.listen(3000);

export { logger };
