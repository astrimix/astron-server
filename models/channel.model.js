import mongoose from "mongoose";

const channelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    guild_id: String
});

export default mongoose.model("Channel", channelSchema);