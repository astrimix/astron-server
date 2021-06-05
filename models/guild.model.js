import mongoose from "mongoose";

const guildSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    icon_hash: String,
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    channels: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Channel",
        //required: true
    }],
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member",
        //required: true
    }]
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    },
    versionKey: "version"
});

export default mongoose.model("Guild", guildSchema);