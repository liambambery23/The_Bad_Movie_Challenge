const db = require("../models/");


module.exports = function (app) {
  app.post("/api/challenge/", async (req, res) => {
    const movieId = req.body.movieId;
    console.log("API add to challenge list: " + movieId);
    const result = await db.Challenge.findAll({
      where: {
        userId: req.user.id,
        movieId: movieId
      }
    }).then((result) => {
      return result;
    });
    console.log("Searching for movie id " + movieId + " in challenge list found " + result.length + " results");
    if(result.length === 0){
      console.log("No results found");
      await db.Challenge.create({
        userId: req.user.id,
        movieId: req.body.movieId
      }).then(() => {
        console.log("Created new row for movie");
      });
    }
    res.json({});
  });

  app.delete("/api/challenged/:id", async (req, res) => {
    const movieId = req.params.id;
    const userId = req.user.id;

    await db.Challenge.destroy({
      where: {
        userId: userId,
        movieId: movieId
      }
    }).then((res) => {
      console.log(res);
    });

    res.json({});
  });

};

