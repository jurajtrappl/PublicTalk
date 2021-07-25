const { Router } = require('express');
const router = Router();

const { findAll, insertOne } = require('../controllers/message');

router.get('/messages', findAll);
router.post('/messages/add', insertOne);

module.exports = router;