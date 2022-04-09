import JwtDecode from "jwt-decode";
import * as argon2 from "argon2";

import { logger } from "../main";
import { UserModel } from "../models/index.js";

function getCurrentUser(token) {
  const bareToken = token.split(" ")[1];
  return JwtDecode(bareToken).id;
}

function generatePassword(barePassword) {
  const hash = await argon2
    .hash(barePassword, { saltLength: 16 })
    .catch((error) =>
      logger.log(
        "PasswordGen",
        "error",
        `Error during password generation:\n\n${error}`
      )
    );
  return hash;
}

function verifyCurrentUser(req, res, next) {
  let user = await UserModel.findOne({ email: req.body.email })
    .exec()
    .catch((error) =>
      logger.log(
        "VerifUser",
        "error",
        `Error during user verification:\n\n${error}`
      )
    );

  if (!user)
    return res.status(404).send({
      error: "Invalid email or password",
    });

  let proof = await argon2
    .verify(user.password, req.body.password)
    .catch((error) =>
      logger.log(
        "VerifUser",
        "error",
        `Error during user verification:\n\n${error}`
      )
    );

  if (proof !== true)
    return res.status(404).send({
      error: "Invalid email or password",
    });
  else {
    req.body.id = user._id;
    return next();
  }
}

function verifyJWTPayload(payload, done) {
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
}

export {
  getCurrentUser,
  generatePassword,
  verifyCurrentUser,
  verifyJWTPayload,
};
