import userModel from "../models/user.model.js";
import crypto from "crypto";

export default {
    isPasswordAndUserMatch(req, res, next) {
        userModel.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) return res.status(404).send({
                "error": "Invalid email or password"
            });

            let passwordField = user.password.split('$');
            let salt = passwordField[0];
            let hash = crypto.createHmac("sha512", salt)
            .update(req.body.password)
            .digest("base64");

            if (hash === passwordField[1]) {
                req.body = {
                    id: user._id,
                    email: user.email
                };
                return next();
            }
            else {
                return res.status(404).send({
                    "error": "Invalid email or password"
                });
            }
        })
    }
}