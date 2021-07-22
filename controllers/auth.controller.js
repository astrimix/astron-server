import { createPassword } from "../services/helpers.js";
import { opts } from "../services/passport.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export default {
    async login(req, res) {
        console.log(req.body)

        const token = jwt.sign(req.body, opts.secretOrKey, { expiresIn: 1200 });

        return res.status(200).send({ token });
    },

    async register(req, res) {
        createPassword(req);

        userModel.create(req.body)
        .then((result) => {
            res.status(201).send({result, message: "New user has been created"})
        })
        .catch((error) =>{
            res.status(400).send(error);
        });
    }
}