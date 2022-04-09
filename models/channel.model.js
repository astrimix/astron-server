import mongoose from "mongoose";
import { userSchema } from "./user.model.js";

const channelSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },

  type: {
    required: true,
    type: Number,
  },

  guild_id: mongoose.Schema.Types.ObjectId,

  position: Number,

  topic: String,

  recipients: [userSchema],

  icon: String,
});

export default mongoose.model("Channel", channelSchema);
export { channelSchema };
