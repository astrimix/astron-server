import passport from "passport";

import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import { verifyJWTPayload } from "../utils/index.js";
import { logger } from "../main.js";

const options = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  audience: "astronapp.com",
  algorithm: ["HS256"],
};

export default {
  init() {
    passport.use(new JWTStrategy(options, verifyJWTPayload));
    logger.log("PassportService", "info", "Strategies initialized");
    return passport;
  },
};
