import { Router } from "express";

import authController from "../controllers/auth.controller.js";
import compareUser from "../services/compareUser.js"

export default () => {
    const api = Router();

    // POST /auth/login
    api.post("/login", [compareUser.isPasswordAndUserMatch, authController.login]);

    // POST /auth/register
    api.post("/register", authController.register);

    return api;
}