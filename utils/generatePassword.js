import * as argon2 from "argon2";
import { logger } from "../main.js";

export default async (barePassword) => {
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
};
