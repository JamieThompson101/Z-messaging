const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const chatSchema = new Schema(
    {
        chatName: {
            type: String,
            required: true,
        },
       description: {
            type: String,
            required: true,
        },
        messages: [
            {
                type: Schema.Types.ObjectId,
                ref: 'message',
            },
        ],
    },
    {
        toJSON: {
            virtual: true,
        },
        id: true,
    }
);  
const chatRoom = mongoose.model('chatRoom', chatSchema);
// add this later when necessary
module.exports = chatRoom;