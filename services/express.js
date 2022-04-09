import express from "express";
import cors from "cors";

import { logger } from "../main.js";
import userRouter from "../routes/user.routes.js";
import guildRouter from "../routes/guild.routes.js";
import authRouter from "../routes/auth.routes.js";

const api_version = "v1";

export default {
  start(expressApp, passport) {
    try {
      expressApp.use(express.json({ limit: "30mb" }));
      expressApp.use(express.urlencoded({ limit: "30mb", extended: "true" }));
      expressApp.use(cors());

      expressApp.use(`/api/${api_version}/auth`, authRouter());
      expressApp.use(
        `/api/${api_version}/users`,
        passport.authenticate("jwt", { session: false }),
        userRouter()
      );
      //app.use(`/api/${api_version}/guilds`, passport.authenticate("jwt", { session: false }), guildRouter());
      expressApp.use(`/api/${api_version}/guilds`, guildRouter());

      return logger.log("info", "ExpressService: ready");
    } catch (error) {
      return logger.log(
        "ExpressService",
        "fatal",
        `Error on initializing the service:\n\n${error}`
      );
    }
  },
};
