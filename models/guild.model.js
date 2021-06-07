import mongoose from "mongoose";
import { memberSchema } from "./guild/member.model.js";

const guildSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    icon_hash: String,
    owner_id: {
        type: String,
        required: true
    },
    channels: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Channel",
    }],
    members: [memberSchema]
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    },
    versionKey: "version"
});

export default mongoose.model("Guild", guildSchema);