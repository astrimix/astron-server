import guildModel from "../models/guild.model.js";
import jwt_decode from "jwt-decode";
import memberModel from "../models/guild/member.model.js";

export default {
    async findById(req, res) {
        await guildModel.findById(req.params._id).populate("owner_id").exec()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((error) => {
            res.status(404).send(error);
        });
    },

    insert(req, res) {
        let decoded = jwt_decode(req.headers.authorization.split(' ')[1]);
        let guildId;

        guildModel.create({
            name: req.body.name,
            owner_id: decoded.id,
        }, (error, doc) => {
            if (error) return res.status(400).send(error);

            guildId = doc.id;
            memberModel.create({
                user_id: doc.id
            }, (error, doc) => {
                if (error) return res.status(400).send(error);
                guildModel.findByIdAndUpdate(guildId, { $push: {
                    members: doc
                }}).catch((error) => {
                    return res.status(400).send(error);
                })
            })
        })
    },

    update(req, res) {
        guildModel.findByIdAndUpdate(req.params._id, { $set: req.body }, (error, result) => {
            if (error) return res.status(400).send(error);
            return res.status(200).send(result);
        })
    },
    
    async delete(req, res) {
        await guildModel.findByIdAndDelete(req.params._id).exec()
        .then((result) => {
            res.status(201).send({ result, message: `Guild ${req.params._id} has been deleted.` })
        })
        .catch((error) =>{
            res.status(400).send(error);
        });
    }
}