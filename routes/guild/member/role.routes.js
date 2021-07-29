import { Router } from "express";

export default () => {
    const api = Router({
        mergeParams: true
    });

    api.get("/:id", GuildController.getGuildMember)

    api.get("/", GuildController.listGuildMembers)

    return api;
}