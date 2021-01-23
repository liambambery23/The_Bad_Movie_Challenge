//creates the User model
module.exports = function(sequelize, DataTypes) {
  const Movie = sequelize.define("Movie", {
    apiReferenceId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING
    },
    overview: {
      type: DataTypes.TEXT
    },
    posterPath: {
      type: DataTypes.STRING
    }
  },
  {
    freezeTableName: true
  });

  return Movie;
};