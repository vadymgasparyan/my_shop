"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose'), { Schema } = require('mongoose');
const orderSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    orders: {
        type: Array,
        required: true,
    },
    isProcessing: {
        type: Boolean,
        default: false
    },
    isFinished: {
        type: Boolean,
        default: false
    },
    isCanceled: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
exports.default = mongoose.model('Order', orderSchema);
