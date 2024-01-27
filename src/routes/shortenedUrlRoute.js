const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const urlController = require('../controllers/shortenedController');

router.post('/shorten', [

    body('url_base').notEmpty().trim(),
    body('url_full').notEmpty().trim(),
    body('ip').notEmpty().isIP().withMessage('O IP é obrigatório'),
    body('from_origin').notEmpty().withMessage('O campo Host de origem é obrigatório'),
],
    urlController.createShortenedUrl
);
router.get('/list', urlController.listShortenedUrls);

router.get('/link/:id', urlController.ShortenedID);

module.exports = router;
