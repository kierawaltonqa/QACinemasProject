'use strict';

const router = require('express').Router();
const { Blog } = require('../config/db');


router.get("/getAll", (req, res, next) => {
    Comment.find((err, comment) => {
        if (err) {
            next(err);
        }
        res.send(comment);
    });
});





module.exports = router;