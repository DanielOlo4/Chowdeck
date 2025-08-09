const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        passwordChangedAt: Date,
        role: {
            type: String,
            enum: ["admin", "user", "merchant"],
            default: "user",
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        verified: {
            type: Boolean,
            default: false,
        },
        blocked: {
            type: Boolean,
            default: false,
        },
        wishlist: [{ type: Schema.ObjectId, ref: "product" }],
        address: [{ city: String, street: String, phone: String }],
    },
    { timestamps: true }
);


module.exports = mongoose.model("user", userSchema);