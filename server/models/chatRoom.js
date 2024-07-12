const { Schema, model } = require('mongoose');

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

//const chatRoom = model('course', courseSchema);

// add this later 
module.export = chatRoom;