const Message = require('../models/message');

// Returns all messages.
function findAll (req, res) {
    Message.find({})
        .then(messages => {
            res.send(messages);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error when retrieving all messages.'
            });
        });
}

// Insert a new message.
function insertOne (req, res) {
    if (req.body.message.content === '') {
        res.status(400).send({ message: 'Message can not be empty!' });
        return;
    }

    Message.create(req.body.message)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error when inserting a new message.'
            });
        })
}

module.exports = { findAll, insertOne }