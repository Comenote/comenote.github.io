const express = require("express");
const router = express.Router();
const Notes = require("../../models/notes");
const {ensureAuthenticated  } = require("../../config/identify-check.js");

router.post('/update', ensureAuthenticated, async (req,res)=>{
 let ID = req.body.ID;
 console.log(req.body);
	await Notes.findByIdAndUpdate(ID, {	noteTitle: req.body.noteTitle, noteDescript: req.body.noteDescript }, (err, note) => {
		console.log(note);
			if(err) throw err;
			
	})
	res.redirect('/dashboard');
	// res.render('updateNote', {note: newNote})
})
// router.put('notes/:id' , (req,res)=>{
// 	 User.update(
// 		 {_id: req.params.id},
// 		 {	notetitle: req.body.noteTitle,
// 				notedescrip: req.body.noteDescript
// 		 },(err,result) =>{
// 			 if(err) {
// 				 console.log(err);
// 				 return res.sendStatus(500);
// 			 }
// 			 res.redirect('/dashboard')
// 		 }
// 	 )
// });
// router.put('list/:id' , (req,res)=>{
// 	User.update(
// 		{_id: req.params.id},
// 		{	notetitle: req.body.noteTitle,
// 			   notedescrip: req.body.noteDescript
// 		},(err,result) =>{
// 			if(err) {
// 				console.log(err);
// 				return res.sendStatus(500);
// 			}
// 			res.redirect('/dashboard')
// 		}
// 	)
// })



module.exports = router;