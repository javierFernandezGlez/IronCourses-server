const {Schema, model} = require("mongoose");

const userSchema = new Schema(
    {
        username: {
            type: String,
            trim: true,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        email: String,
        educator: {
            type: Boolean,
            default: false
        },
    },
    {
        timeseries: true,
        timestamps: true,
    }
);

const User = model("User", userSchema);

module.exports = User;