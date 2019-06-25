const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Lists = require("../../models/List");
const { ensureAuthenticated } = require("../../config/identify-check.js");

router.get("/:id" ,ensureAuthenticated, (req,res) => {
    Lists.find({_id: req.user._id})
        .then(data => {
            // console.log(data);
        })
        .catch(err => console.log(err))
});


module.exports = router;