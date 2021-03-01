'use strict';

const router = require('express').Router();

const { Discuss } = require('../config/db');




//*create
router.post("/create", (req, res, next) => {

    const discuss = new Discuss(req.body);
    console.log(discuss);
    discuss.save().then((result) => {
        res.status(201).send(`${discuss} created`);
    })
        .catch((err) => next(err));
});


//*read - getAll
router.get("/getAll", (req, res, next) => {
    Discuss.find((err, discuss) => {
        if (err) {
            next(err);
        }
        res.send(discuss);
    });
});

//!Read by movie title

//!update

//!delete




module.exports = router;