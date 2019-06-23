const express = require("express");
const Lists = require("../models/List");
const router = express.Router();
const { ensureAuthenticated } = require("../config/identify-check");
// ==================================================================
router.get("/",ensureAuthenticated, async (req,res) => {
	Lists.find({author: req.user._id})
		.then(data => console.log(data))
		.catch(err => conaole.log(err));
	const listObj = req.user.lists;
	const notesObj = req.user.notes;
	let ListArr = [];
	let notesArr = [];
	try {
		await listObj.forEach((element) => {
			ListArr.push(element);
		});
		await notesObj.forEach((element) => {
			notesArr.push(element);
		});
	} 
	catch (err) {
		console.log(err);
	}
	// console.log(ListArr);
	return res.render("dashboard", {ListArr,notesArr});
});

router.get("/lists" ,ensureAuthenticated, (req,res) => {
   res.render("listPage");
});


// ==================================================================


module.exports = router;