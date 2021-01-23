// Dependencies
// =======================================
// db model import
const db = require("../models/");


module.exports = function (app) {
  app.post("/api/watched/", (req, res) => {

    db.Watched.create({
      userId: req.user.id,
      movieId: req.body.movieId
    }).then((data) => {
      console.log(data);
    });
    res.redirect("/");

  } );

  app.delete("/api/watched/:id", (req) => {
    const movieId = req.params.id;
    const userId = req.user.id;

    db.Watched.destroy({
      where: {
        userId: userId,
        movieId: movieId
      }
    }).then((res) => {
      console.log(res);
    });
  });

};

