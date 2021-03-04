'use strict';

const router = require('express').Router();

const { Discuss } = require('../config/db');




//*create
router.post("/create", async (req, res, next) => {

    const discuss = new Discuss(req.body);
    console.log(discuss);
    await discuss.validate();
    discuss.save().then((result) => {
        res.status(201).send(`${discuss.name} posted about ${discuss.movie}`);
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

//*Read by movie title
router.get("/getName/:movie", (req, res, next) => {
    Discuss.find({ movie: req.params.movie }, (err, result) => {
        if (err) {
            next(err)
        }
        res.status(200).send(result)
    })
})

//*update
router.patch("/updateById/:id", (req, res, next) => {
    Discuss.findByIdAndUpdate(req.params.id,
        req.body,

        { new: true, runValidators: true },
        (err, product) => {

            if (err) {
                next(err);
            } else {
                res.status(202).send(`${product}Successfully updated!`);
            }
            res.status(202).send(`Successfully updated post`);
        })
});

//!delete
router.delete("/delete/:id", (req, res, next) => {
    Discuss.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            next(err);
        }
        res.status(204).send(`Successfully deleted`);
    });
});




module.exports = router;