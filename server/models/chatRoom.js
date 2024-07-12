 const { chatRoom, users } = require('mongoose');

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

const chatRoom = mongoose.model('chatRoom', chatSchema);

// add this later when necessary
module.exports = {users, chatRoom};