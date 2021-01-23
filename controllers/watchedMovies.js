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
    });
  });

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

