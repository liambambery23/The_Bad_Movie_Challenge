// Dependencies
// =======================================
// db model import
const movie = require("../models/movie");

module.exports = function (app) {

  app.post("/api/movies", (req, res) => {
    const movieInsert = {
      apiReference: req.body.apiReference,
      title: req.body.title
    };
    movie.create(movieInsert).then((response) => {
      res.json(response);
    });
  });

  // app.put("/api/movies/:id", (req, res) => {
  //   // put function from sequelize
  // });

  // app.delete("/api/movies/:id", (req, res) => {
  //   // delete function from sequlize
  // });

};

