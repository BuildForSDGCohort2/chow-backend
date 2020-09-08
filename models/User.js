const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        password: {
           type: String,
           required: true 
        },
        createdAt: {
            type: Date,
            default: Date.now()
        }
    },
    { timestamps: true }
);

module.exports = User = mongoose.model("user", UserSchema);
