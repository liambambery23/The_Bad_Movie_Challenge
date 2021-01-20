//creates the Challenge model which is a table of all of the movies each used has been challenged to watch
module.exports = function(sequelize, DataTypes) {
  const Challenge = sequelize.define("Challenge", {

  },
  {
    freezeTableName: true
  });

  Challenge.associate = function(models) {

    // Challenge contain a reference to a movie
    Challenge.belongsTo(models.Movie, {
      foreignKey: {
        allowNull: false
      }
    });
    // Challenge belong to a User model
    Challenge.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Challenge;
};