'use strict'

const router = require('express').Router();
const {Teams} = require(`../config/db`);


// Create method  WORKS!!
router.post("/create", (req, res, next) => {
    const team = new Teams(req.body);
    team.save()
        .then((result) => {
            res.status(201).send(`${result.teamName} has been added successfully!`)
        })
        .catch((err) => next(err));
});

// Get method  WORKS!!
router.get("/read", (req, res, next) => {
    Teams.find((err, Teams) => {
        if (err) {
            next(err);
        }
        res.send(Teams);
    });
});

// Get one methods  WORKS!!
router.get("/get/:id", (req,res,next) => {
    Teams.findById(req.params.id, (err,result) => {
        if(err){
            next(err);
        }
        res.status(200).send(result);
    })
})

// Update selected WORKS!!
router.patch("/updateSingle/:id", (req, res, next) => {
    Teams.findByIdAndUpdate(req.params.id, 
    req.body, 
    {new: true}, 
    (err) => {
       if(err){
           next(err);
       }
       res.status(201).send(`Successfully updated!`);
   })
});


//UPDATE ALL
router.put("/updateAll/:id", (req,res,next) => {
    const {teamName, locations} = req.query;
    Teams.findByIdAndUpdate(req.params.id, {teamName,locations}, {new: true}, (err)=>{
        if(err){
            next(err);
        }
        res.status(202).send(`Successfully replaced!`);
    }); 
});

// Delete
router.delete("/delete/:id", (req, res, next) => {
    Teams.findByIdAndDelete(req.params.id, (err) => {
        if(err){
            next(err);
        }
        res.status(204).send(`Successfully deleted`);
    });
});

module.exports = router; 