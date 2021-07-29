import { Router } from "express";
import MemberController from "#app/controllers/guild/member.controller.js";
import RoleRouter from "#app/controllers/guild/member/role.routes.js";

export default () => {
    const api = Router({
        mergeParams: true
    });

    api.get("/:id", GuildController.getGuildMember)

    api.get("/", GuildController.listGuildMembers)

    api.get("/search", GuildController.findGuildMember)

    api.put("/:id", GuildController.createGuildMember)

    api.patch("/:id", GuildController.updateGuildMember)

    api.patch("/@me", GuildController.updateCurrentUser)

    api.use("/:id/roles", RoleRouter())

    return api;
}