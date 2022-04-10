import * as argon2 from "argon2";
import { UserModel } from "../models/index.js";
import { logger } from "../main.js";

export default (req, res, next) => {
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
};
