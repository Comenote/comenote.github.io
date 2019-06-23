const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const { ensureAuthenticated } = require("../../config/identify-check.js");

router.get("/:id" ,ensureAuthenticated, (req,res) => {
    User.find({_id: req.user._id})
        .then(data => {
            const doc = data[0]["lists"];
            doc.find(x => {
                console.log(x.id);
            });
        })
        .catch(err => console.log(err))
});


module.exports = router;