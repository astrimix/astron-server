import { Passport } from "passport/lib";
const passport = new Passport();

import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import { verifyJWTPayload } from "../utils/helpers.js";
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
