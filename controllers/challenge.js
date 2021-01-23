const db = require("../models/");


module.exports = function (app) {
  app.post("/api/challenge/", (req) => {
    db.Challenge.create({
      userId: req.user.id,
      movieId: req.body.movieId
    }).then((res) => {
      console.log(res);
    });
  });

  app.delete("/api/challenge/:id", (req) => {
    const movieId = req.params.id;
    const userId = req.user.id;

    db.Challenge.destroy({
      where: {
        userId: userId,
        movieId: movieId
      }
    }).then((res) => {
      console.log(res);
    });
  });

};

