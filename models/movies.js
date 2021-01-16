//creates the User model
module.exports = function(sequelize, DataTypes) {
    let Movies = sequelize.define("Movies", {
        apiReferenceId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING
        }
    });

    Movies.associate = function(models) {
        Movies.hasMany(models.Challenges, {
            onDelete: "cascade"
        });
        Movies.hasMany(models.Watched, {
            onDelete: "cascade"
        });
    }

    return Movies;
}