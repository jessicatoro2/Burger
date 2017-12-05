var express = require("express");

var router = express.Router();

var connection = require("../config/connection.js")

router.get("/", function(req, res) {
    res.render("index");
});

router.get("/burgers", function(req, res) {
	var queryString = "SELECT * FROM " + "burgers" + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      res.render("burgers", {burgers: result});
    });
    
});




module.exports = router;