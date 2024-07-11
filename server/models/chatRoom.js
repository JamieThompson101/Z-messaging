const { Schema, model } = require('mongoose');

const chatSchema = new Schema(
    {
        chatName: {
            type: String,
            required: true,
        },
        chatParticipants: {
            type: boolean,
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

const chatRoom = model('course', courseSchema);

module.export = chatRoom;