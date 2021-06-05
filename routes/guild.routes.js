import { Router } from "express";
import guildController from "../controllers/guild.controller.js";
import memberRouter from "../routes/guild/member.routes.js";

export default () => {
    const api = Router();

    // GET /guilds/:_id
    api.get("/:_id", guildController.findById);

    // POST /guilds
    api.post("/", guildController.insert);

    // PATCH /guilds/:_id
    api.patch("/:_id", guildController.update);
    
    // DELETE /guilds
    api.delete("/:_id", guildController.delete);

    // // GET /guilds/_id/members
    // api.get("/:_id/members", guildController.findMembers);

    // // GET /guilds/:_id/members/:member_id
    // api.get("/:_id/members/:member_id", guildController.findMembers);

    api.use("/:_id/members", function(req, res, next) {
        req._id = req.params._id;
        next();
    }, memberRouter());

    return api;
}