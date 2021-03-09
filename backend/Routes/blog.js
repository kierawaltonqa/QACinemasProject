'use strict'

const router = require('express').Router();
const { Blog } = require('../config/db');

// CREATE Blog

router.post("/create", (req, res, next) => {
    const book = new Blog(req.body);
    book.save()
        .then((result) => {
            res.status(201).send(`${result._id}`)
        })
        .catch((err) => next(err));
});

// READ ALL

router.get("/read", (req, res, next) => {
    Blog.find((err, Blog) => {
        if (err) {
            next(err);
        }
        res.send(Blog);
    });
});

// GET ONE
router.get("/readOne/:id", (req, res, next) => {
    Blog.findById(req.params.id, (err, result) => {
        if (err) {
            next(err);
        }
        res.status(200).send(result);
    })
})

// UPDATE PARTIAL

router.patch("/updateOne/:id", (req, res, next) => {
    Blog.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true },
        (err) => {
            if (err) {
                next(err);
            }
            res.status(202).send(`Successfully updated!`);
        });
});

//  UPDATE ALL

router.put("/update/:id", (req, res, next) => {
    const { moviename, date, time, bookername, adultseats, childseats } = req.body;
    Blog.findByIdAndUpdate(req.params.id,
        {
            lastUpdated,
            title,
            lilInfo,
            blogText,
            author
        },
        { new: true, runValidators: true }, (err, doc) => {
            if (err) {
                next(err);
            }
            res.status(202).send(`Successfully replaced!`);
        });
});

// DELETE

router.delete("/delete/:id", (req, res, next) => {
    Blog.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            next(err);
        }
        res.status(204).send(`Successfully deleted`);
    });
});

module.exports = router;