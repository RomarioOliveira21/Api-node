const ShortenedUrl = require('../models/shortenedModel');
const { validationResult } = require('express-validator');
const shortID = require('shortid');
const { stack } = require('../routes');

exports.createShortenedUrl = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { url_base, url_full, ip, from_origin } = req.body;

        let id = shortID.generate(),
            url_short = '';

        url_short = url_base + '/' + id;

        const newUrl = new ShortenedUrl({
            id,
            url_full,
            url_short,
            ip,
            from_origin
        });

        const savedUrl = await newUrl.save();

        const response = {

            status: true,
            data: savedUrl
        }

        res.json(response);

    } catch (error) {

        const response = {
            stack: false,
            error: error
        }

        res.status(500).json(response);
    }
};

exports.listShortenedUrls = async (req, res) => {

    try {

        const urls = await ShortenedUrl.find();
        res.json(urls);

    } catch (error) {

        res.status(500).json({ error: error.message });
    }
};

exports.ShortenedID = async (req, res) => {

    let id = req.params.id;

    try {

        const urls = await ShortenedUrl.findOne({ id: id }).select("-_id");
        res.json(urls);

    } catch (error) {

        res.status(500).json({ error: error.message });
    }
};

