import { CONSTANTS } from "../utils/index.js";
import { logger } from "../main.js";

export default (server) => {
  //const { address, port } = server.address();

  server.on("listening", () =>
    logger.log("HTTP Server", "info", CONSTANTS.server_start("*", "3000"))
  );

  server.on("close", () =>
    logger.log("HTTP Server", "info", CONSTANTS.server_stop)
  );

  server.on("error", (error) =>
    logger.log("HTTP Server", "error", CONSTANTS.error(error))
  );
};
