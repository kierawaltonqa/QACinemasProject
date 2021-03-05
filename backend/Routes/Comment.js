'use strict';
const router = require('express').Router();
const { Comment } = require('../config/db');

//create 

router.post("/create", (req, res, next) => {
    const comment = new Comment(req.body);
    comment.save()
        .then((result) => {
            res.status(201).send(`${result.id} has been added successfully!`)
        })
        .catch((err) => next(err));

});


//read all

router.get("/getAll", (req, res, next) => {
    Comment.find((err, comment) => {
        if (err) {
            next(err);
        }
        res.send(comment);
    });
});

//readone

router.get("/getOne/:id", (req, res, next) => {
    Comment.findById(req.params.id, (err, result) => {
        if (err) {
            next(err);
        }
        res.status(200).send(result);
    })
})

//edit

router.patch("/updateOne/:id", (req, res, next) => {
    Comment.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true },
        (err) => {
            if (err) {
                next(err);
            }
            res.status(202).send(`Successfully updated!`);
        })
});

//delete

router.delete("/delete/:id", (req, res, next) => {
    Comment.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            next(err);
        }
        res.status(204).send(`Successfully deleted`)
    })
})







//export
module.exports = router;