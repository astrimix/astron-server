import { logger } from "../main.js";

export default (payload, done) => {
  let user = await UserModel.findById(payload.sub)
    .exec()
    .catch((error) =>
      logger.log(
        "VerifJWT",
        "error",
        `Error during payload verification:\n\n${error}`
      )
    );

  if (user) return done(null, user);
  else return done(null, false);
};
