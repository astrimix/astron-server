import { Router } from "express";
import { verifyCurrentUser } from "../utils/index.js";
import { AuthController } from "../controllers/index.js";

export default () => {
  const api = Router();

  api.post("/login", [verifyCurrentUser, AuthController.login]);
  api.post("/register", AuthController.register);

  return api;
};
