'use strict'

const router = require('express').Router();
const {Booking} = require('../config/db');

// CREATE BOOKING

router.post("/create", (req,res,next) => {
    const book = new Booking(req.body);
    book.save()
        .then((result) => {
            res.status(201).send(`${result._id} has been added successfuly!`)
        })
        .catch((err) => next(err));
});

// READ ALL

router.get("/read", (req, res, next) => {
    Booking.find((err, booking) => {
        if (err) {
            next(err);
        }
        res.send(booking);
    });
});

// GET ONE
router.get("/read/:id", (req,res,next) => {
    Booking.findById(req.params.id, (err,result) => {
        if(err){
            next(err);
        }
        res.status(200).send(result);
    })
})

// UPDATE PARTIAL

router.patch("/updateOne/:id", (req, res, next) => {
    Booking.findByIdAndUpdate(req.params.id, 
     req.body, 
     {new: true}, 
     (err) => {
        if(err){
            next(err);
        }
        res.status(202).send(`Successfully updated!`);
    })
 });

//  UPDATE ALL

router.put("/update/:id", (req,res,next) => {
    const {name, price, onSale} = req.body;
    Booking.findByIdAndUpdate(req.params.id, {name,price,onSale}, {new: true}, (err)=>{
        if(err){
            next(err);
        }
        res.status(202).send(`Successfully replaced!`);
    });
});

// DELETE

router.delete("/delete/:id", (req, res, next) => {
    Booking.findByIdAndDelete(req.params.id, (err) => {
        if(err){
            next(err);
        }
        res.status(204).send(`Successfully deleted`);
    });
});

module.exports = router;