import userModel from "../models/user.model.js";
import { opts } from "../services/passport.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";

export default {
    async login(req, res) {
        console.log(req.body)

        const token = jwt.sign(req.body, opts.secretOrKey, { expiresIn: 1200 });

        return res.status(200).send({ token });
    },

    async register(req, res) {
        let salt = crypto.randomBytes(16).toString("base64");
        let hash = crypto.createHmac("sha512", salt)
            .update(req.body.password)
            .digest("base64");
        
        req.body.password = salt + "$" + hash;

        userModel.create(req.body)
        .then((result) => {
            res.status(201).send({result, message: "New user has been created"})
        })
        .catch((error) =>{
            res.status(400).send(error);
        });
    }
}