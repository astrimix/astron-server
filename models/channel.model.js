import mongoose from "mongoose";
import { userSchema } from "./user.model.js";

const channelSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    type: {
        type: Number,
        required: true
    },
    guild_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    position: {
        type: Number,
        required: false
    },
    topic: {
        type: String,
        required: false
    },

    recipients: [userSchema],
    icon: {
        type: String,
        required: false
    }
}, {
    versionKey: "version"
});

export default mongoose.model("Channel", channelSchema);