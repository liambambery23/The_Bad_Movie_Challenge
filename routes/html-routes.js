const db = require("../models");

module.exports = function (app) {

  app.get("/", async (req, res) => {
    const scripts = [{ script: "/js/index.js" }];
    // If the user is not logged in send them to login
    if (!req.user) {
      res.redirect("/login");
    } else {
      console.log("page loaded");
      const userMovieOnDeck = await db.User.findOne({
        where: {
          id: req.user.id
        },
        include: [db.Movie]
      }).then((result) => {
        return result.dataValues.Movie;
      });
      if(userMovieOnDeck){
        const movieOnDeck = {
          title: userMovieOnDeck.title,
          posterPath: userMovieOnDeck.posterPath,
          overview: userMovieOnDeck.overview
        };
        console.log("Sending to index");
        console.log(movieOnDeck);
        res.render("index",
          {
            scripts: scripts,
            movie: movieOnDeck
          });
      } else {
        res.render("index",
          {
            scripts: scripts
          });
      }
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
