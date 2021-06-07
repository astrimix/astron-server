import userModel from "../models/user.model.js";
import guildModel from "../models/guild.model.js";
import crypto from "crypto";

export default {

    findById(req, res) {
        userModel.findById(req.params._id, (error, result) => {
            if (error) return res.status(404).send(error);
            res.status(200).send(result);
        })
    },

    // findGuilds(req, res) {
    //     guildModel.find({ })
    // },

    findAll(req, res) {
        userModel.find((error, result) => {
            if (error) return res.status(404).send(error);
            res.status(200).send(result);
        })
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
    
    delete(req, res) {
        userModel.findByIdAndDelete(req.params._id, (error, result) => {
            if (error) res.status(400).send(error);
            res.status(200).send({ result, message: `Document ${req.params._id} has been deleted.` })
        })
    },

}