import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    password_hash: String,
    discriminator: Number,
    avatar_hash: String,
}, {
    timestamps: true
});

export default mongoose.model("Users", userSchema);