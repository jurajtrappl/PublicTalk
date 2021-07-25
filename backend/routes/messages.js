const { Router } = require('express');
const router = Router();

const { findAll, insertOne } = require('../controllers/message');

router.get('/', findAll);
router.post('/add', insertOne);

module.exports = router;