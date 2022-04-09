import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
    },
    discriminator: Number,
    avatar_hash: String,
    email: {
      required: true,
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
export { userSchema };
