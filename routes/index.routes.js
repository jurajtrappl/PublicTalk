const express = require('express');
const indexRouter = express.Router();

// logic (controller)
const { findAll } = require('../controllers/message.controller');

indexRouter.get('/messages', findAll);

module.exports = indexRouter;