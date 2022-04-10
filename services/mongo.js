import mongoose from "mongoose";
import { logger } from "../main.js";

const { DATABASE_IP, DATABASE_PORT } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  autoIndex: false,
  minPoolSize: 5,
  connectTimeoutMS: 10000,
  family: 4,
  authSource: "admin",
  auth: {
    user: "admin",
    password: "admin",
  },
};

export default {
  async start() {
    await mongoose
      .connect(`mongodb://${DATABASE_IP}:${DATABASE_PORT}/astron`, options)
      .catch((error) => logger.log("MongoService", "fatal", error));
  },
};
