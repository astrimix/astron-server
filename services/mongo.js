import mongoose from "mongoose";
import { logger } from "../main.js";

// const { DATABASE_IP, DATABASE_PORT } = process.env;

const options = {
  autoIndex: false,
  auth: {
    username: "admin",
    password: "admin",
  },
  minPoolSize: 5,
  connectTimeoutMS: 10000,
  family: 4,
  authSource: "admin",
};

export default {
  async start() {
    await mongoose
      .connect(`mongodb://localhost:27017/astron`, options)
      .catch((error) => console.log(error));
  },
};
