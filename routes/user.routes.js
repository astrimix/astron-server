import { Router } from "express";
import userController from "../controllers/user.controller.js";

export default () => {
    const api = Router();

    // GET /users/:_id
    api.get("/:_id", userController.findById);
    // GET /users
    api.get("/", userController.findAll);
    // POST /users
    //api.post("/", userController.insert);
    // PATCH /users/:_id
    api.patch("/:_id", userController.update);
    // DELETE /users/:_id
    api.delete("/:_id", userController.delete);

    return api;
}