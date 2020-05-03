"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose'), { Schema } = require('mongoose');
const productSchema = new Schema({
    product: {
        type: String,
        required: true,
        unique: true
    },
    weight: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    attachment: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});
exports.default = mongoose.model('Product', productSchema);
