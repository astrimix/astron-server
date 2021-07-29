import mongoose from "mongoose";

const roleSchemea = mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    color: {
        required: true,
        type: Number
    },
    positions: {
        required: true,
        type: Number
    },
    permissions: {
        required: true,
        type: Array[String]
    },
    mentionable: {
        required: true,
        type: Boolean
    }
}, {
    versionKey: "version"
});

//export default mongoose.model("Member", memberSchema);
export { roleSchemea };