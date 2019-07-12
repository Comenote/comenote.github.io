const express = require("express");
const router = express.Router();
const Notes = require("../../models/notes");
const { ensureAuthenticated } = require("../../config/identify-check.js");

router.get("/:id" ,ensureAuthenticated, (req,res) => {
    const ListID = req.params.id;
    console.log(ListID);
    Notes.find({_id: ListID})
        .then(data => {
					const noteTitle = data[0]["noteTitle"];
					const noteDescript = data[0]["noteDescript"];
					const ID = data[0]["_id"];
					console.log(ListID);
            res.render("detailsNotes", {noteTitle,noteDescript,ID});
        })
        .catch(err => console.log(err))
});


module.exports = router;