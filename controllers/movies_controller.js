// Dependencies 
// =======================================
let express = require("express");
let router = express.Router();

// movie model import
let movie = require("../models");

// Route set-up
router.get("/", function(req, res) {
  // get function from sequelize 
});

router.post("/api/movies", function(req, res) {
  
  // post function from sequelize 
});

router.put("/api/movies/:id", function(req, res) {
  // put function from sequelize
});

router.delete("/api/movies/:id", function(req, res) {
  // delete function from sequlize
});

// Export routes for server.js to use.
module.exports = router;