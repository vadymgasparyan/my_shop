const
    mongoose = require('mongoose'),
    { Schema } = require('mongoose');

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

export default mongoose.model('User', userSchema);