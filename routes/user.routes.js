import { Router } from "express";
import userController from "../controllers/user.controller.js";

export default () => {
    const api = Router();

    /**
     * GET /users/@me
     * * Scope: Any
     */
    api.get("/@me", userController.findMe);

    /**
     * GET /users/_id
     * * Scope: Any
     */
    api.get("/:_id", userController.findUserById);

    /**
     * GET /users/@me/guilds
     * * Scope: Any
     */
    api.get("/@me/guilds", userController.findMyGuilds);

    /**
     * PATCH /users/@me
     * * Scope: Any
     * @param username, @param avatar 
     */
    api.patch("/@me", userController.updateMe);

    /**
     * DELETE /users/@me/guilds/_id
     * * Scope: Any
     */
    api.delete("/@me/guilds/:_id", userController.deleteFromGuild);


    // ! Administrator Endpoints
    /**
     * GET /users/_id/guilds
     * * Scope: Administrator
     */
    api.get("/:_id/guilds", userController.findUserGuilds);

    /**
     * GET /users/_id/guilds/_id
     * * Scope: Administrator
     */
    api.get("/:_id/guilds/:_id", userController.findGuildById);

    /**
     * PATCH /users/_id
     * * Scope: Administrator
     */
    api.patch("/:_id", userController.updateUser);

    /**
     * DELETE /users/_id
     * * Scope: Administator
     */
    api.delete("/:_id", userController.deleteUser);

    return api;
}