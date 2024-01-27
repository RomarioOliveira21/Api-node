const mongoose = require('../db/database');

const shortenedUrlSchema = new mongoose.Schema({

    id: String,
    url_full: String,
    url_short: String,
    ip: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    from_origin: String
});

module.exports = mongoose.model('ShortenedUrl', shortenedUrlSchema);
