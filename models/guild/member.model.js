import mongoose from "mongoose";

const memberSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    nickname: String,
    avatar_hash: String
}, {
    timestamps: {
        createdAt: "joined_at",
    },
    versionKey: "version"
});

//export default mongoose.model("Member", memberSchema);
export { memberSchema };