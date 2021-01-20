//creates the Watched model which is a table of all of the movies each used has been challenged to watch
module.exports = function(sequelize, DataTypes) {
  const Watched = sequelize.define("Watched", {

  },
  {
    freezeTableName: true
  });

  Watched.associate = function(models) {

    // Watched contain a reference to a movie
    Watched.belongsTo(models.Movie, {
      foreignKey: {
        allowNull: false
      }
    });
    // Watched belong to a User model
    Watched.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Watched;
};