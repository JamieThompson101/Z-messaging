  import { Schema, model } from 'mongoose';

const chatSchema = new Schema(
    {
        chatName: {
            type: String,
            required: true,
        },
        chatParticipants: {
            type: Boolean,
            required: true,
        },
        users: [
            {
            type: Schema.Types.ObjectId,
            ref: 'User',
            },
        ],
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