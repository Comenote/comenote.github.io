const express = require("express");
const router = express.Router();
const Lists = require("../../models/List");
const { ensureAuthenticated } = require("../../config/identify-check.js");

router.get("/:id" ,ensureAuthenticated, (req,res) => {
    const ListID = req.params.id;
    console.log(ListID);
    Lists.find({_id: ListID})
        .then(data => {
            res.render("detailList", {arr: data[0]["list"], title: data[0]["title"]});
        })
        .catch(err => console.log(err))
});


module.exports = router;