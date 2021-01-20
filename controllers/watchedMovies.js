// Dependencies
// =======================================
// db model import
let db = require("../models/");

module.exports = function (app) {

  app.get("/api/watched/", function(req, res) {
    let userEmail = req.user.email;
    db.user.


  });
}

