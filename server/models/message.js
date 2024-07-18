const Message = require(mongoose);

const { Schema } = message;

const messageSchema = new Schema({
    message: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    chatId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'chatRoom',
    },
    toJson: {
        virtual: true,
    },
    id: false,
    });

const message = message.model('Message', messageSchema);

module.exports = Message;