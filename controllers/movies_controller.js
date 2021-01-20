// Dependencies
// =======================================
// db model import
let movie = require("../models/movie");

module.exports = function (app) {

  app.post("/api/movies", function(req, res) {
    // post function from sequelize
  });

  app.put("/api/movies/:id", function(req, res) {
    // put function from sequelize
  });

  app.delete("/api/movies/:id", function(req, res) {
    // delete function from sequlize
  });

}

