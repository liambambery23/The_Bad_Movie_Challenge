// Dependencies
// =======================================
// db model import
const db = require("../models");


module.exports = function (app) {
  app.post("/api/watched/", async (req, res) => {
    const movieId = req.body.movieId;
    console.log("API add to watch list: " + movieId);
    const result = await db.Watched.findAll({
      where: {
        userId: req.user.id,
        movieId: movieId
      }
    }).then((result) => {
      return result;
    });
    console.log("Searching for movie id " + movieId + " in watch list found " + result.length + " results");
    if(result.length === 0){
      console.log("No results found");
      await db.Watched.create({
        userId: req.user.id,
        movieId: req.body.movieId
      }).then(() => {
        console.log("Created new row for movie");
      });
    }
    res.json({});
  });

  app.delete("/api/watched/:id", async (req, res) => {
    const movieId = req.params.id;
    const userId = req.user.id;

    await db.Watched.destroy({
      where: {
        userId: userId,
        movieId: movieId
      }
    }).then(() => {
      console.log("Watched movie deleted");
    });
    res.json({});
  });

};

