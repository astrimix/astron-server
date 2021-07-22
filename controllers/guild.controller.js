import Guild from "../models/guild.model.js";
import Channel from "../models/channel.model.js";
import JwtDecode from "jwt-decode";
import mongoose from "mongoose";

export default {
    async createGuild(req, res) {
        const decoded = JwtDecode(req.headers.authorization.split(' ')[1]);
        const guildId = mongoose.Types.ObjectId();
        let channelIds = [];

        await Channel.insertMany([
            { name: "general", guild_id: guildId },
            { name: "off-topic", guild_id: guildId }
        ])
        .then(result => {
            for (let channel of result) {
                channelIds.push(channel._id);
            }
        })
        .catch(error => res.status(500).send(error));

        await Guild.create({
            _id: guildId,
            name: req.body.name,
            owner_id: decoded.id,
            system_channel_id: channelIds[0],
            member_count: 1,
            members: [{
                user: {
                    _id: decoded.id
                },
            }],
            channels: channelIds,
            max_members: 100
        })
        .then(guild => {
            guild.populate({
                path: "members",
                populate: { 
                    path: "user",
                    select: "-password"
                }
            })
            .populate("channels")
            .execPopulate()
            .then(result => res.status(200).send(result))
            .catch(error => res.status(500).send(error));    
        })
        .catch(error => res.status(500).send(error));
    },

    async findGuild(req, res) {
        await Guild.findById(req.params._id)
        .exec()
        .then(result => {
            if (result == null) return res.status(404);
            return res.status(200).send(result);
        })
        .catch(error => res.status(500).send(error));
    },

    async updateGuild(req, res) {
        await Guild.findByIdAndUpdate(req.params._id, { $set: req.body })
        .exec()
        .then(result => res.status(200).send({
            result,
            message: `Guild ${result._id} has been successfully updated.`
        }))
        .catch(error => res.status(500).send(error));
    },

    async deleteGuild(req, res) {
        await Guild.findByIdAndDelete(req.params._id)
        .exec()
        .then(result => res.status(200).send({
            result,
            message: `Guild ${result._id} has been successfully deleted.`
        }))
        .catch(error => res.status(404).send(error));
    }
}