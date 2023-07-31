const express = require('express');
const router = express.Router();
const controller = require('../controllers/emailController')
router.post('/', controller.post);
module.exports = router;