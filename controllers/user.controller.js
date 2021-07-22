import { createPassword } from "../services/helpers.js";
import User from "../models/user.model.js";
import Guild from "../models/guild.model.js";
import JwtDecode from "jwt-decode";

function getMe(request) {
    return JwtDecode(request.headers.authorization.split(' ')[1]).id;
}

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

        await User.findByIdAndUpdate(getMe(req), { $set: req.body }, { new: true })
        .then(result => res.status(200).send(result))
        .catch(error => res.status(500).send(error));
    },

    async updateUser(req, res) {
        if (req.body.password != null) createPassword(req);

        await User.findByIdAndUpdate(req.params._id, { $set: req.body })
        .then(result => res.status(200).send(result))
        .catch(error => res.status(500).send(error));
    },
    
    async deleteUser(req, res) {
        User.findByIdAndDelete(req.params._id)
        .then(result => res.status(200).send({ result, message: `User ${req.params._id} has been deleted.` }))
        .catch(error => res.status(500).send(error));
    },

    // TODO: Finish the rest of the requests

    findMyGuilds(req, res) {
        return res.status(500).send("WIP");
    },

    findUserGuilds(req, res) {
        return res.status(500).send("WIP");
    },

    findGuildById(req, res) {
        return res.status(500).send("WIP");
    },

    deleteFromGuild(req,res) {
        return res.status(500).send("WIP");
    }
}