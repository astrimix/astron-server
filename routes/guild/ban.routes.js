import { Router } from "express";
import GuildController from "#app/controllers/user/guild.controller.js";

export default () => {
    const api = Router({
        mergeParams: true
    });

    

    return api;
}