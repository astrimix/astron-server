import { Router } from "express";
import guildController from "../controllers/guild.controller.js";

export default () => {
    const api = Router();

    // GET /guilds/:_id
    api.get("/:_id", guildController.findById);

    // POST /guilds
    api.post("/", guildController.create);

    // PATCH /guilds/:_id
    api.patch("/:_id", guildController.update);

    // DELETE /guilds/:_id
    api.delete("/:_id", guildController.delete)

    return api;
}