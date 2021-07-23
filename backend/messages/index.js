const { Router } = require('express');
const { findAll } = require('./message.controller');

const router = Router();

router.get('/', findAll);

module.exports = router;