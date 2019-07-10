const express = require("express");
const Lists = require("../models/List");
const Notes = require("../models/notes");
const router = express.Router();
const { ensureAuthenticated } = require("../config/identify-check");
// ==================================================================

router.get("/",ensureAuthenticated, async (req,res) => {
	const notesList = await Notes.find({author: req.user._id});
	const listList = await Lists.find({author: req.user._id});
	res.render("dashboard",{notesList, listList});	 
});
// ==================================================================
router.get("/lists" ,ensureAuthenticated, (req,res) => {
   res.render("listPage");
});
// ==================================================================


module.exports = router;