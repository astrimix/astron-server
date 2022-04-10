import { logger } from "../main.js";
import { CONSTANTS } from "../utils/index.js";

export default (server) => {
  server.on("connection", () =>
    logger.log("SocketIO", "info", CONSTANTS.socket_connect)
  );
};
