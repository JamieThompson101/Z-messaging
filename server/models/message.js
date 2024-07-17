const message = require(mongoose);

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
    });

const Message = message.model('Message', messageSchema);

module.exports = Message;