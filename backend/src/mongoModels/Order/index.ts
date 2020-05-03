const
    mongoose = require('mongoose'),
    { Schema } = require('mongoose');

const orderSchema = new Schema({
    name: {
        type: String, // sha256
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    orders: {
        type: Array, // sha256
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

export default mongoose.model('Order', orderSchema);