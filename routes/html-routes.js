// Requiring path to so we can use relative routes to our HTML files
//const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
//const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", (req, res) => {
    // If the user is not logged in send them to login
    if (!req.user) {
      res.redirect("/login");
    } else {
      
      res.render("index", {});
    }
  });

  app.get("/login", (req, res) => {
    let scripts = [{ script: '/js/login.js'}];
    // If the user is already logged in send them to index
    if (req.user) {
      res.redirect("/");
    } else {
      res.render("login", { scripts: scripts });
    }
  });

  app.get("/register", (req, res) => {
    let scripts = [{ script: '/js/register.js'}];
    // If the user is already logged in send them to index
    if (req.user) {
      res.redirect("/");
    } else {
      res.render("register", { scripts: scripts });
    }
  });

};
