const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {

    res.status(200).send({
        
        title: "Node Express API",
        version: "0.1.1",
        author : "Romário Oliveira"
    });
});

module.exports = router;