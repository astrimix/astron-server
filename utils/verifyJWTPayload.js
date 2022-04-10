import { logger } from "../main.js";
import { CONSTANTS } from "./index.js";
import { UserModel } from "../models/index.js";

export default async (payload, done) => {
  let user = await UserModel.findById(payload.user._id)
    .exec()
    .catch((error) => {
      logger.log("VerifyJWT", "error", CONSTANTS.error(error));
      return done(error, false);
    });

  if (!user) return done(null, false);
  return done(null, user);
};
