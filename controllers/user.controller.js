import userModel from "../models/user.model.js";
import guildModel from "../models/guild.model.js";
import jwtDecode from "jwt-decode";
import crypto from "crypto";

export default {
    findMe(req, res) {
        userModel.findById(jwtDecode(req.headers.authorization.split(' ')[1]).id, (error, result) => {
            if (error) return res.status(500).send(error);
            return res.status(200).send(result);
        })
    },

    findUserById(req, res) {
        userModel.findById(req.params._id, (error, result) => {
            if (error) return res.status(500).send(error);
            if (result == null) return res.status(404);
            return res.status(200).send(result);
        })
    },

    findAllUsers(req, res) {
        userModel.find((error, result) => {
            if (error) return res.status(500).send(error);
            res.status(200).send(result);
        })
    },

    updateMe(req, res) {
        if (req.body.password != null) {
            let salt = crypto.randomBytes(16).toString("base64");
            let hash = crypto.createHmac("sha512", salt)
                .update(req.body.password)
                .digest("base64");
            
            req.body.password = salt + "$" + hash;    
        }

        userModel.findByIdAndUpdate(jwtDecode(req.headers.authorization.split(' ')[1]).id, { $set: req.body }, { new: true }, (error, result) => {
            if (error) return res.status(500).send(error);
            return res.status(200).send(result);
        })
    },

    updateUser(req, res) {
        if (req.body.password != null) {
            let salt = crypto.randomBytes(16).toString("base64");
            let hash = crypto.createHmac("sha512", salt)
                .update(req.body.password)
                .digest("base64");
            
            req.body.password = salt + "$" + hash;    
        }

        userModel.findByIdAndUpdate(req.params._id, { $set: req.body }, (error, result) => {
            if (error) return res.status(500).send(error);
            return res.status(200).send(result);
        })
    },
    
    deleteUser(req, res) {
        userModel.findByIdAndDelete(req.params._id, (error, result) => {
            if (error) res.status(500).send(error);
            res.status(200).send({ result, message: `User ${req.params._id} has been deleted.` })
        })
    },

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