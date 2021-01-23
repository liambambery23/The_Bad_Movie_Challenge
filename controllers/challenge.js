const db = require("../models/");

module.exports = function (app) {
  app.post("/api/challenge/", (req, res) => {
    db.Challenge.create({
        
    })
  });
};

 