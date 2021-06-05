import guildModel from "../../models/guild.model.js";

export default {
    async findMembers(req, res) {
        await guildModel.findById(req.params._id, "members").populate("owner_id").exec()
        .then((result) => {
            res.status(201).send(result);
        })
        .catch((error) =>{
            res.status(400).send(error);
        });
    },

    async findMember(req, res) {
        await guildModel.findById(req.params._id).select({
            members: {
                $elemMatch: { _id: req.params.member_id }
            }
        }).exec()
        .then((result) => {
            res.status(201).send(result);
        })
        .catch((error) =>{
            res.status(400).send(error);
        });
    },
}