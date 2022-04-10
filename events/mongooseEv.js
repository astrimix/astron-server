import mongoose from "mongoose";
import { CONSTANTS } from "../utils/index.js";
import { logger } from "../main.js";

export default () => {
  mongoose.connection.on("connected", () =>
    logger.log("MongoService", "info", CONSTANTS.mongoose_accept)
  );

  mongoose.connection.on("error", (error) =>
    logger.log("MongoService", "fatal", CONSTANTS.mongoose_error(error))
  );

  mongoose.connection.on("disconnected", () =>
    logger.log("MongoService", "warn", CONSTANTS.mongoose_close)
  );
};
