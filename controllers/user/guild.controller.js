import { getMe } from "#app/services/helpers.js";

import Guild from "#app/models/guild.model.js";

export default {
    async findMyGuilds(req, res) {
        await Guild.find({
            "members.user": getMe(req)
        }, "_id name icon owner_id permissions")
        .exec()
        .then(result => res.status(200).send(result))
        .catch(error => res.status(500).send(error));
    },

    async findUserGuilds(req, res) {
        await Guild.find({
            "members.user": req.params._id
        }, "_id name icon owner_id permissions")
        .exec()
        .then(result => res.status(200).send(result))
        .catch(error => res.status(500).send(error));
    },

    async deleteFromGuild(req,res) {
        await Guild.findByIdAndUpdate(req.params._id, {
            $pull: {
                members: {
                    _id: getMe(req)
                }
            }
        }, { new: true })
        .exec()
        .then(() => res.status(200).send({ "result": "OK" }))
        .catch(error => res.status(500).send(error));
    }
}