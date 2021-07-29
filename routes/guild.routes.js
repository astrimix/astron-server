import { Router } from "express";
import GuildController from "../controllers/guild.controller.js";

import ChannelRouter from "./guild/channel.routes.js";
import MemberRouter from "./guild/member.routes.js";
import RoleRouter from "./guild/role.routes.js";
import BanRouter from "./guild/ban.routes.js";

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

    api.use("/:id/channels", ChannelRouter());

    api.use("/:id/members", MemberRouter());

    api.use("/:id/roles", RoleRouter());

    api.use("/:id/bans", BanRouter());

    return api;
}