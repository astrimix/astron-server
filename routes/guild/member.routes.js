import { Router } from "express";
import MemberController from "#app/controllers/guild/member.controller.js";

export default () => {
    const api = Router({
        mergeParams: true
    });
    
    api.get("/:_id/members/:user_id", GuildController.getGuildMember);

    return api;
}