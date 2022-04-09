import mongoose from "mongoose";
import { logger } from "../main.js";

const msg = {
  mongoose_error: "Connection error on stack: \n\n",
  mongoose_accept: "Connection accepted!",
  mongoose_close: "Connection closed!",
  socket_new: "A new connection has been established.",
  service_start: "Service initialized.",
  error: "An error has occured on stack: \n\n",
  server_start: (addr, port) =>
    `Server running on port ${addr || "*"}:${port}!`,
  server_stop: "Connection terminated.",
};

export default {
  startListening(httpServer, socketServer) {
    mongoose.connection.on("connected", () =>
      logger.log("MongoService", "info", msg.mongoose_accept)
    );

    mongoose.connection.on("error", (error) =>
      logger.log("MongoService", "fatal", `${msg.mongoose_error}${error}`)
    );

    mongoose.connection.on("disconnected", () =>
      logger.log("MongoService", "warn", msg.mongoose_close)
    );

    httpServer.on("listening", () =>
      logger.log(
        "HTTP Server",
        "info",
        msg.server_start(
          httpServer.address().address,
          httpServer.address().port
        )
      )
    );
    httpServer.on("close", () =>
      logger.log("HTTP Server", "info", "Connection terminated")
    );
    httpServer.on("error", (error) =>
      logger.log("HTTP Server", "error", `${msg.mongoose_error}${error}`)
    );
  },
};
