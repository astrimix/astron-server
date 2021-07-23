import { Router } from "express";
import ChannelController from "../controllers/guild.controller.js";

export default () => {
    const api = Router();

    /**
     * POST /guilds
     * * Scope: Any
     */
    api.post("/", guildController.createGuild);

    return api;
}