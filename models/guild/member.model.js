import mongoose from "mongoose";

const memberSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    nickname: String,
    avatar_hash: String
}, {
    timestamps: {
        createdAt: "joined_at",
    },
    versionKey: "version"
});

export default mongoose.model("Members", memberSchema);