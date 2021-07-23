const Message = require('../models/message');

// Returns all messages
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

module.exports = { findAll }