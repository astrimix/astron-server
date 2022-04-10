// TODO: User leaves guild
// TODO: List user guilds
// TODO: User joins guild

import { Router } from "express";
import { UserController, GuildController } from "../../controllers/index.js";

export default () => {
  const api = Router({ mergeParams: true });

  api.get("/", UserController.listAllGuilds);
  api.get("/:id", GuildController.getGuild);
  api.post("/:id", UserController.joinGuild);
  api.delete("/:id", UserController.leaveGuild);

  return api;
};
