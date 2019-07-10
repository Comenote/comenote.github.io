const express = require("express");
const router = express.Router();
const User = require("../../models/User");

router.put('notes/:id' , (req,res)=>{
	 User.update(
		 {_id: req.params.id},
		 {	notetitle: req.body.noteTitle,
				notedescrip: req.body.noteDescript
		 },(err,result) =>{
			 if(err) {
				 console.log(err);
				 return res.sendStatus(500);
			 }
			 res.redirect('/dashboard')
		 }
	 )
});
router.put('list/:id' , (req,res)=>{
	User.update(
		{_id: req.params.id},
		{	notetitle: req.body.noteTitle,
			   notedescrip: req.body.noteDescript
		},(err,result) =>{
			if(err) {
				console.log(err);
				return res.sendStatus(500);
			}
			res.redirect('/dashboard')
		}
	)
})



module.exports = router;