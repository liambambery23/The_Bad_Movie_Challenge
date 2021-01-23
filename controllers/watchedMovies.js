// Dependencies
// =======================================
// db model import
const db = require("../models/");

module.exports = function (app) {
  app.post("/api/watched/", (req, res) => {
    console.log(res);
    db.Watched.create({
        userId: req.user.id,
        movieId: req.body.movieId    
    }).then((res) => {
        console.log(res);
    }) 
  });
};

 