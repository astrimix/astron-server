import { Router } from "express";
import { MeRouter, UserRouter } from "./user/guild.routes.js";
import { UserController } from "../controllers/index.js";

export default () => {
  const api = Router();

  api.get("/@me", UserController.findMe);
  api.get("/:id", UserController.findUserById);
  api.get();

  // // api.patch("/@me", UserController.updateMe);

  // api.patch("/:id", UserController.updateUser);

  // api.delete("/:id", UserController.deleteUser);

  // api.use("/@me/guilds", MeRouter());
  // api.use("/:_id/guilds", UserRouter());

  /* 
  get me
  get user
  
  
  */

  return api;
};
