const mongoose = require("mongoose");
const fs = require('fs');
const UserSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;