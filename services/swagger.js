import swaggerJSDocs from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { logger } from "../main";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Astron Server API",
      version: "0.1.0",
    },
    servers: [
      { url: "http://localhost:3000/user" },
      { url: "http://localhost:3000/guild" },
      { url: "http://localhost:3000/channel" },
    ],
  },
  apis: [
    "../docs/user.docs.js",
    "../docs/guild.docs.js",
    "../docs/channel.mode.js",
  ],
};

export default {
  init(expressApp) {
    expressApp.use(
      "/api-docs",
      swaggerUI.serve,
      swaggerUI.setup(swaggerJSDocs(options))
    );

    return logger.log("DocsService", "info", "Swagger initialized");
  },
};
