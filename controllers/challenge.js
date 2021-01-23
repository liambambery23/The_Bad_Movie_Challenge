const db = require("../models/");

module.exports = function (app) {
  app.post("/api/challenge/", (req, res) => {
    console.log(res);
    db.Challenge.create({
      userId: req.user.id,
      movieId: req.body.movieId    
    }).then((res) => {
      console.log(res);
    }); 
  });
};

 