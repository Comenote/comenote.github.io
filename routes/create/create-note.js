
const express = require("express");
const router = express.Router();
const Notes = require("../../models/notes");
const { ensureAuthenticated } = require("../../config/identify-check");

router.get("/notes",ensureAuthenticated, (req,res) => {
	res.render('create-notePage');
});
// ===========================================================================================================================
router.post("/notes", ensureAuthenticated, (req,res) => {

    const onAdd = {
			noteTitle: req.body.noteTitle,
			noteDescript: req.body.noteDescript,
      author: req.user._id
		}
	
    Notes.CreateNotes(new Notes(onAdd), (err,list) => {
				if(err) throw err;
			
        res.redirect("/dashboard");
		});
		
});

module.exports = router;