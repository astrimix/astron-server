import jwt_decode from "jwt-decode";
import guildModel from "../models/guild.model.js";
import channelModel from "../models/channel.model.js";
import mongoose from "mongoose";

export default {
    async create(req, res) {
        let decoded = jwt_decode(req.headers.authorization.split(' ')[1]);
        let guildId = mongoose.Types.ObjectId();
        let channelsIds;

        await channelModel.insertMany([
            { name: "general", guild_id: guildId },
            { name: "off-topic", guild_id: guildId }
        ]);

        await channelModel.find({ guild_id: guildId }, "_id", (error, result) => {
            if (error) {
                console.log(error);
                return;
            }
            return channelsIds = result;
        })

        let guild = await guildModel.create({
            _id: guildId,
            name: req.body.name,
            owner_id: decoded.id,
            members: [{
                user: {
                    _id: decoded.id
                },
            }],
            channels: channelsIds
        }).catch(error => {
            console.log(error);
            return;
        })

        guild = await guild.populate({
            path: "members",
            populate: { 
                path: "user",
                select: "-password"
            }
        })
        .populate("channels")
        .execPopulate()
        .then(result => {
            console.log(result);
            return res.status(201).send(result);
        })
        .catch(error => {
            console.log(error);
            return res.status(400).send(error);
        })
    },

    async findById(req, res) {
        await guildModel.findById(req.params._id)
        .exec()
        .catch(error => {
            return res.status(404).send(error);
        })
        .then(result => {
            return res.status(200).send(result);
        })
    },

    async update(req, res) {
        await guildModel.findByIdAndUpdate(req.params._id, {
            $set: req.body
        })
        .exec()
        .catch(error => {
            return res.status(404).send(error);
        })
        .then(result => {
            return res.status(200).send({
                result,
                message: `Guild ${result._id} has been successfully updated.`
            })
        })
    },

    async delete(req, res) {
        await guildModel.findByIdAndDelete(req.params._id)
        .exec()
        .catch(error => {
            return res.status(404).send(error);
        })
        .then(result => {
            return res.status(200).send({
                result,
                message: `Guild ${result._id} has been successfully deleted.`
            })
        })
    }
}