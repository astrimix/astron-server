import express from "express";
import cors from "cors";

import { logger } from "../main.js";
import { AuthRouter, UserRouter } from "../routes/index.js";

export default {
  middlewares: {
    init: (app) => {
      app.use(express.json({ limit: "30mb" }));
      app.use(express.urlencoded({ limit: "30mb", extended: "true" }));
      app.use(cors());
      return logger.log("Express", "info", "Middlewares initialized");
    },
  },

  router: {
    init: (app, passport) => {
      app.use(`/auth`, AuthRouter());
      app.use(
        `/users`,
        passport.authenticate("jwt", { session: false }),
        UserRouter()
      );
      return logger.log("Express", "info", "Router started");
    },
  },
};
