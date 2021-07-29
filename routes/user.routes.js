import { Router } from "express";
import { MeRouter, UserRouter } from "./user/guild.routes.js";
import UserController from "../controllers/user.controller.js";

export default () => {
    const api = Router();

    /**
     * GET /users/@me
     * * Scope: Any
     */
    api.get("/@me", UserController.findMe);

    /**
     * GET /users/_id
     * * Scope: Any
     */
    api.get("/:_id", UserController.findUserById);

    /**
     * PATCH /users/@me
     * * Scope: Any
     * @param username, @param avatar 
     */
    api.patch("/@me", UserController.updateMe);

    /**
     * PATCH /users/_id
     * * Scope: Administrator
     */
    api.patch("/:_id", UserController.updateUser);

    /**
     * DELETE /users/_id
     * * Scope: Administator
     */
    api.delete("/:_id", UserController.deleteUser);

    api.use("/@me/guilds", MeRouter())
    api.use("/:_id/guilds", UserRouter())

    return api;
}