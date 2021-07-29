import { createPassword, getMe } from "../services/helpers.js";
import User from "../models/user.model.js";
import Guild from "../models/guild.model.js";
import JwtDecode from "jwt-decode";

export default {
    async findMe(req, res) {
        await User.findById(getMe(req))
        .then(result => res.status(200).send(result))
        .catch(error => res.status(500).send(error));
    },

    async findUserById(req, res) {
        await User.findById(req.params._id)
        .then(result => {
            if (result == null) return res.status(404);
            return res.status(200).send(result)
        })
        .catch(error => res.status(500).send(error));
    },

    async findAllUsers(req, res) {
        await User.find()
        .then(result => res.status(200).send(result))
        .catch(error => res.status(500).send(error));
    },

    async updateMe(req, res) {
        if (req.body.password != null) createPassword(req);

        await User.findByIdAndUpdate(getMe(req), { 
            $set: { 
                "username": req.body.username,
                "discriminator": req.body.discriminator,
                "avatar_hash": req.body.avatar_hash,
                "email": req.body.email,
                "password": req.body.password
            }
        }, { new: true })
        .then(result => res.status(200).send(result))
        .catch(error => res.status(500).send(error));
    },

    async updateUser(req, res) {
        if (req.body.password != null) createPassword(req);

        await User.findByIdAndUpdate(req.params._id, { 
            $set: { 
                "username": req.body.username,
                "discriminator": req.body.discriminator,
                "avatar_hash": req.body.avatar_hash,
                "email": req.body.email,
                "password": req.body.password
            }
        })
        .then(result => res.status(200).send(result))
        .catch(error => res.status(500).send(error));
    },
    
    async deleteUser(req, res) {
        User.findByIdAndDelete(req.params._id)
        .then(result => res.status(200).send({ result, message: `User ${req.params._id} has been deleted.` }))
        .catch(error => res.status(500).send(error));
    },
}