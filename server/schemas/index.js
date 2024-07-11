const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

let chatSchema = mongoose.Schema({
    messages: [{
        text: {
            type: String,
            max: 400,
        },
        sender: {
            type: mongoose.Schema.Type.ObjectId,
            ref: 'User'
        }
    }],
    participant1: [{
        type: mongoose.Schema.Type.ObjectId,
        ref: 'User'
    }],
    participant2: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = { typeDefs, resolvers };