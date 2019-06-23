const express = require("express");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../config/identify-check");
// Welcome Page
router.get("/", forwardAuthenticated, (req, res) => res.render("welcome"));


module.exports = router;
