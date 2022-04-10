import { Router } from "express";
import { UserController } from "../controllers/index.js";
//import GuildRouter from "./user/guild.routes.js";

export default () => {
  const api = Router();

  api.get("/:id", UserController.findUserById);
  api.patch("/:id", UserController.updateUser);
  api.delete("/:id", UserController.deleteUser);

  //api.use("/:_id/guilds", GuildRouter());

  return api;
};
