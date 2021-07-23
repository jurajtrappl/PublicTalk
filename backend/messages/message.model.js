const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [ true, 'Username is required.' ]
    },
    content: {
        type: String,
        required: [ true, 'Content is required' ]
    }
});

const Message = mongoose.model('message', messageSchema);

module.exports = Message