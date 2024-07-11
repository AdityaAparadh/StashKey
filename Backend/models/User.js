const mongoose = require('mongoose');
const db = require('../database/db');

// import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true},
        hashedPassword: {type: String, required: true},
        securityKey : {type: String, required: true},
        vault : {type: String, required: false},
        createdAt: {type: Date, default: Date.now},
        kdfRounds : {type: Number , required: false},
        lastUpdated : {type: Date, required: true}
    }
);


const User = mongoose.model("users", schema);

module.exports = User;