'use strict';

const router = require('express').Router();

const { Payment } = require('../config/db');


//create

router.post("/create", (req, res, next) => {

    const pay = new Payment(req.body);
    console.log(pay);
    pay.save().then((result) => {
        res.status(201).send(`payment from ${pay} was succesfull`);
    })
        .catch((err) => next(err));
});

//?http://localhost:4500/payment/create

router.get("/getAll", (req, res, next) => {
    Payment.find((err, pay) => {
        if (err) {
            next(err);
        }
        res.send(pay);
    })
});

module.exports = router;

