import { Router } from "express";
import { verifyCurrentUser } from "../utils/index.js";
import { AuthController } from "../controllers/index.js";

export default () => {
  const api = Router();

  api.post("/register", AuthController.register);
  api.post("/login", [verifyCurrentUser, AuthController.login]);

  return api;
};
