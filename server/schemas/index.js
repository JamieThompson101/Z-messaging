const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');

let schema = mongoose.Schema({
    messages: [{
        text: {
            type: String,
            max: 400,
        },
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    participant1: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    participant2: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = { typeDefs, resolvers};