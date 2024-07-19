const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const messageSchema = new Schema({
    message: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    });

const message = mongoose.model('Message', messageSchema);

module.exports = message;