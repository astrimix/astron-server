import userModel from "../models/user.model.js";
import guildModel from "../models/guild.model.js";
import crypto from "crypto";

export default {
    async findAll(req, res) {
        await userModel.find().exec()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((error) => {
            res.status(404).send(error);
        });
    },

    async findById(req, res) {
        await userModel.findById(req.params._id).exec()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((error) => {
            res.status(404).send(error);
        });
    },

    update(req, res) {
        if (req.body.password != undefined || req.body.password != null) {
            let salt = crypto.randomBytes(16).toString("base64");
            let hash = crypto.createHmac("sha512", salt)
                .update(req.body.password)
                .digest("base64");
            
            req.body.password = salt + "$" + hash;    
        }

        userModel.findByIdAndUpdate(req.params._id, { $set: req.body }, (error, result) => {
            if (error) return res.status(400).send(error);
            return res.status(200).send(result);
        })
    },
    
    async delete(req, res) {
        await userModel.findByIdAndDelete(req.params._id).exec()
        .then((result) => {
            res.status(200).send({ result, message: `Document ${req.params._id} has been deleted.` })
        })
        .catch((error) =>{
            res.status(400).send(error);
        });
    },

    async findGuilds(req, res) {
        await guildModel.find().exec()
        .then((result) => {
            res.status(200).send({ result });
        })
        .catch((error) => {
            res.status(400).send(error);
        })
    }
}