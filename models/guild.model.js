import mongoose from "mongoose";
import { memberSchema } from "./guild/member.model.js";

const guildSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    icon: String,
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    permissions: Array,
    roles: Array,
    emojis: Array,
    system_channel_id: mongoose.Schema.Types.ObjectId,
    member_count: Number,
    members: [memberSchema],
    channels: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Channel",
    }],
    max_members: Number,
    vanity_url: String,
    banner: String
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    },
    versionKey: "version"
});

export default mongoose.model("Guild", guildSchema);