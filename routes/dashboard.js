const express = require("express");
const Lists = require("../models/List");
const router = express.Router();
const { ensureAuthenticated } = require("../config/identify-check");
// ==================================================================
router.get("/",ensureAuthenticated, async (req,res) => {
	Lists.find({author: req.user._id})
		.then(data => {
			let ListArr = [];
			for(let i = 0; i < data.length; i++){
				ListArr.push(data[i]);
			}
			return res.render("dashboard",{ListArr});
		})
		.catch(err => console.log(err));
});

router.get("/lists" ,ensureAuthenticated, (req,res) => {
   res.render("listPage");
});


// ==================================================================


module.exports = router;