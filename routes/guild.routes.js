import { Router } from "express";
import GuildController from "../controllers/guild.controller.js";

export default () => {
    const api = Router();

    /**
     * POST /guilds
     * * Scope: Any
     */
    api.post("/", GuildController.createGuild);

    /**
     * GET /guilds/_id
     * * Scope: Any
     */
    api.get("/:id", GuildController.findGuild);

    /**
     * PATCH /guilds/:_id
     * * Scope: Any
     * * Permission: MANAGE_GUILD
     */
    api.patch("/:id", GuildController.updateGuild);

    /**
     * DELETE /guilds/:_id
     * * Scope: Guild Owner
     */
    api.delete("/:id", GuildController.deleteGuild);

    return api;
}