var express = require("express");
var router = express.Router();

// get index page
router.get("/", function (req, res, next) {
     res.render("index.html");
});

module.exports = router;