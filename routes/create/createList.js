const express = require("express");
const router = express.Router();
const Lists = require("../../models/List");
const { ensureAuthenticated } = require("../../config/identify-check");
// ===========================================================================================================================
router.post("/lists", ensureAuthenticated, (req,res) => {
    const content = {...req.body};
    delete content.title;
    console.log(req.user._id);
    const listArr = Object.values(content)
    const onAdd = {
        title: req.body.title,
        list: listArr,
        author: req.user._id
    }
    Lists.CreateLists(new Lists(onAdd), (err,list) => {
        if(err) throw err;
        res.redirect("/dashboard");
    });
    
        
});


module.exports = router;