import { Router } from "express";
import userController from "../controllers/user.controller.js";

export default () => {
    const api = Router();

    // GET /users/:_id
    api.get("/:_id");
    // GET /users
    api.get("/");
    // POST /users
    api.post("/", userController.insert());
    // PATCH /users/:_id
    api.patch("/:_id");
    // DELETE /users/:_id
    api.delete("/:_id");

    return api;
}