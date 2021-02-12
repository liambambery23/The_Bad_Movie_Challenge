// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const exphbs = require("express-handlebars");


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;
require("dotenv").config();



// Sets up the view engine
// =============================================================
app.engine("handlebars", exphbs({
  defaultLayout: "main",
  helpers: {
    section: function (name, options) {
      if (!this.sections) {this.sections = {};}
      this.sections[name] = options.fn(this);
      return null;
    }
  }
}));
app.set("view engine", "handlebars");


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Import our db models
const db = require("./models");

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
// =============================================================
require("./routes/html-routes")(app);
require("./controllers/user")(app);
require("./controllers/movies")(app);
require("./controllers/watched")(app);
require("./controllers/challenge")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });
});
