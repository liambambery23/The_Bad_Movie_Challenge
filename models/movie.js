//creates the User model
module.exports = function(sequelize, DataTypes) {
    let Movie = sequelize.define("Movie", {
        apiReferenceId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true
    });

    Movie.associate = function(models) {
        Movie.hasMany(models.Challenge, {
            onDelete: "cascade"
        });
        Movie.hasMany(models.Watched, {
            onDelete: "cascade"
        });
    }

    return Movie;
}