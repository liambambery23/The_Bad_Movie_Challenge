const db = require("../models");

module.exports = function (app) {

  app.get("/", async (req, res) => {
    const scripts = [{ script: "/js/index.js" }];

    // If the user is not logged in send them to login
    if (!req.user) {
      res.redirect("/login");
    } else {

      console.log("*** Index loaded ***");

      // Search for users movie on deck
      const movieOnDeck = await db.User.findOne({
        where: {
          id: req.user.id
        },
        include: [db.Movie]
      }).then((result) => {
        if(result.dataValues.Movie){
          return result.dataValues.Movie.dataValues;
        }
        return "";
      });

      // Search for watched movies list
      const watchedMoviesData = await db.Watched.findAll({
        where: {
          userId: req.user.id
        },
        include: [db.Movie]
      }).then((result) => {
        if(result){
          return result;
        }
        return [];
      });

      // Get out the movies from the data
      const watchedMovies = [];
      watchedMoviesData.forEach(watchedMovie => {
        watchedMovies.push(watchedMovie.Movie.dataValues);
      });

      // Search for challenge movies list
      const challengeMoviesData = await db.Challenge.findAll({
        where: {
          userId: req.user.id
        },
        include: [db.Movie]
      }).then((result) => {
        if(result){
          return result;
        }
        return [];
      });

      // Get out the movies from the data
      const challengeMovies = [];
      challengeMoviesData.forEach(challengeMovie => {
        challengeMovies.push(challengeMovie.Movie.dataValues);
      });

      res.render("index",
        {
          scripts: scripts,
          movie: movieOnDeck,
          watchedMovies: watchedMovies,
          challengeMovies: challengeMovies
        });
    }
  });

  app.get("/login", (req, res) => {
    const scripts = [{ script: "/js/login.js" }];
    // If the user is already logged in send them to index
    if (req.user) {
      res.redirect("/");
    } else {
      res.render("login", { scripts: scripts });
    }
  });

  app.get("/register", (req, res) => {
    const scripts = [{ script: "/js/register.js" }];
    // If the user is already logged in send them to index
    if (req.user) {
      res.redirect("/");
    } else {
      res.render("register", { scripts: scripts });
    }
  });

};
