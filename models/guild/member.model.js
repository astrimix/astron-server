import mongoose from "mongoose";

const memberSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    nickname: {
        type: String,
        required: false
    },
    avatar: {
        type: String,
        required: false
    }
}, {
    timestamps: {
        createdAt: "joined_at",
    },
    versionKey: "version"
});

//export default mongoose.model("Member", memberSchema);
export { memberSchema };