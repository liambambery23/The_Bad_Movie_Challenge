// Dependencies
// =======================================
// db model import
const db = require("../models/");

module.exports = function (app) {
  app.get("/api/watched/", (req, res) => {
    //this is just to shut the linter up
    console.log(db);
    console.log(req);
    console.log(res);
  });
};

