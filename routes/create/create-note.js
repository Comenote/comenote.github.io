const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const fs = require('fs');

const { ensureAuthenticated } = require("../../config/identify-check");
// ===================================================================
router.get("/notes",ensureAuthenticated, (req,res) => {
    res.render('create-notePage');
});
// ===================================================================
router.post("/notes", ensureAuthenticated, async (req,res) => {
		let notesObj = {
			notetitle: req.body.noteTitle,
			notedescrip: req.body.noteDescript
		}
		await User.find({_id:req.user._id})
		.then(data => {			
			let content = data[0].notes;
			content.push(notesObj);
				// console.log(content);					
				data[0].save(content);
			
		})
		.catch(err => console.log(err));         
         res.redirect('/dashboard');
});


module.exports = router;