import { Router } from "express";
import guildController from "../controllers/guild.controller.js";

export default () => {
    const api = Router();

    /**
     * POST /guilds
     * * Scope: Any
     */
    api.post("/", guildController.createGuild);

    /**
     * GET /guilds/_id
     * * Scope: Any
     */
    api.get("/:_id", guildController.findGuild);

    /**
     * PATCH /guilds/:_id
     * * Scope: Any
     * * Permission: MANAGE_GUILD
     */
    api.patch("/:_id", guildController.updateGuild);

    /**
     * DELETE /guilds/:_id
     * * Scope: Guild Owner
     */
    api.delete("/:_id", guildController.deleteGuild)

    return api;
}