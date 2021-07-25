const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

const Message = mongoose.model('message', messageSchema);

module.exports = Message