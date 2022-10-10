var express = require('express');
var router = express.Router();

const User = require("../models/User.model");
const {Course} = require("../models/Course.model");

const isEducator = require("../middleware/isEducator");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get('/published-courses', function(req, res, next) {
    Course.find({published: true})
        .then(result => {
            console.log(result);
            return res.json(result.data);
        })
        .catch(err => console.log(err));
  });

router.post("/create-course", isLoggedIn, isEducator, (req, res, next) => {
    console.log(req.body);
    const name = req.body.name;
    const description = req.body.description;
    const category = req.body.category;
    const instructor = req.user._id;

    Course.create({
        name,
        description,
        category,
        instructor
    })
        .then(result => {
            return res.json({message: "created succesfully"})
        })
        .catch(err => {
            console.log(err);
            res.json(err);
            
        })
})


module.exports = router;