const { Router } = require('express');
const { findAll, insertOne } = require('./message.controller');

const router = Router();

router.get('/', findAll);
router.post('/', insertOne);

module.exports = router;