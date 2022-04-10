// import mongoose from "mongoose";
// import { channelSchema } from "./channel.model.js";

// const guildSchema = mongoose.Schema(
//   {
//     name: {
//       required: true,
//       type: String,
//     },

//     icon: String,

//     owner_id: {
//       required: true,
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//     },

//     channels: [channelSchema],

//     members: [{ type: mongoose.Schema.Types.ObjectId, ref: "Member" }],

//     // permissions: Array,
//     // roles: Array,
//     // emojis: Array,
//     // system_channel_id: mongoose.Schema.Types.ObjectId,
//     // member_count: Number,
//     // max_members: Number,
//     // vanity_url: String,
//     // banner: String,
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Guild", guildSchema);
