//creates the Challenge model which is a table of all of the movies each used has been challenged to watch
module.exports = function(sequelize, DataTypes) {
  //this is to shut the linter up
  console.log(DataTypes);
  const Challenge = sequelize.define("Challenge", {

  },
  {
    freezeTableName: true
  });

  Challenge.associate = function (models) {

    Challenge.belongsTo(models.User, {
      foreignKey: "userId"
    });

    Challenge.belongsTo(models.Movie, {
      foreignKey: "movieId"
    });

  };

  return Challenge;
};