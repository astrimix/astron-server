import express from "express";
import cors from "cors";

import { logger } from "../main.js";
import userRouter from "../routes/user.routes.js";
import guildRouter from "../routes/guild.routes.js";
import authRouter from "../routes/auth.routes.js";

const api_version = "v1";

export default {
  start(app, passport) {
    try {
      app.use(express.json({ limit: "30mb" }));
      app.use(express.urlencoded({ limit: "30mb", extended: "true" }));
      app.use(cors());

      app.use(`/api/${api_version}/auth`, authRouter());
      app.use(
        `/api/${api_version}/users`,
        passport.authenticate("jwt", { session: false }),
        userRouter()
      );

      //app.use(`/api/${api_version}/guilds`, passport.authenticate("jwt", { session: false }), guildRouter());
      app.use(`/api/${api_version}/guilds`, guildRouter());

      return logger.log("info", "Express: Service started");
    } catch (error) {
      return logger.log(
        "Express",
        "fatal",
        `Error on initializing the service:\n\n${error}`
      );
    }
  },
};
