//creates the Watched model which is a table of all of the movies each used has been challenged to watch
module.exports = function(sequelize, DataTypes) {
  //this is to shut the linter up
  console.log(DataTypes);
  const Watched = sequelize.define("Watched", {

  },
  {
    freezeTableName: true
  });

  Watched.associate = function (models) {

    Watched.belongsTo(models.User, {
      foreignKey: "userId"
    });

    Watched.belongsTo(models.Movie, {
      foreignKey: "movieId"
    });

  };

  return Watched;
};