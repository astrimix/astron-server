import mongoose from "mongoose";

const msg = {
  mongoose_error: "Connection error on stack: \n\n",
  mongoose_accept: "Connection accepted!",
  mongoose_close: "Connection closed!",
  error: "An error has occured on stack: \n\n",
};

export default () => {
  mongoose.connection.on("connected", () =>
    logger.log("MongoService", "info", msg.mongoose_accept)
  );

  mongoose.connection.on("error", (error) =>
    logger.log("MongoService", "fatal", `${msg.mongoose_error}${error}`)
  );

  mongoose.connection.on("disconnected", () =>
    logger.log("MongoService", "warn", msg.mongoose_close)
  );
};
