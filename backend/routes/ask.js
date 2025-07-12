const express = require('express');
const { handleQuestion } = require('../controllers/questionController');

const router = express.Router();
router.post('/', handleQuestion);
module.exports = router;