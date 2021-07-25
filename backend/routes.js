const messages = require('./routes/messages');
const auth = require('./routes/auth');

module.exports = (app) => {
    app.use('/', auth);
    app.use('/messages', messages);

    app.all('/*', (req, res) => {
        res.status(404).send('Not found.');
    })
}