const { Schema, model } = require('mongoose');

const chatSchema = new Schema(
    {
        chatId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        }, 
        
        users: [
            {
            type: Schema.Types.ObjectId,
            ref: 'User',
            },
        ], 
        messages: {
            type: String,
            required: false,
        },
    },
       
    {
        toJSON: {
            virtual: true,
        },
        id: false,
    }
);  
const chatRoom = model('chatRoom', chatSchema);
// add this later when necessary
module.exports = { chatRoom };