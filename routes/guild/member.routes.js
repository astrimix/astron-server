import { Router } from "express";
import memberController from "../../controllers/guild/member.controller.js";

export default () => {
    const api = Router({
        mergeParams: true
    });
    
    // GET /guilds/_id/members
    //api.get("/", memberController.);

    // GET /guilds/:_id/members/:member_id
    //api.get("/:member_id", memberController);

    return api;
}