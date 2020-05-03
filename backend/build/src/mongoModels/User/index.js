"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose'), { Schema } = require('mongoose');
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});
exports.default = mongoose.model('User', userSchema);
