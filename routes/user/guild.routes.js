import { Router } from "express";
import GuildController from "#app/controllers/user/guild.controller.js";

let MeRouter = () => {
    const api = Router({
        mergeParams: true
    });

    /**
     * GET /users/@me/guilds
     * * Scope: Any
     */
    api.get("/", GuildController.findMyGuilds);
    
    /**
     * DELETE /users/@me/guilds/_id
     * * Scope: Any
     */
    api.delete("/:_id", GuildController.deleteFromGuild);

    return api;
}

let UserRouter = () => {
    const api = Router({
        mergeParams: true
    });

    /**
     * GET /users/_id/guilds
     * * Scope: Administrator
     */
    api.get("/", GuildController.findUserGuilds);

    return api;
}

export { UserRouter, MeRouter }