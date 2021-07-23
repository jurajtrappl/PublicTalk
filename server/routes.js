const index = require('./messages/index');

module.exports = (app) => {
    app.use('/index', index);

    app.all('/*', (req, res) => {
        res.status(404).send('Not found.');
    })
}