//creates the Challenges model which is a table of all of the movies each used has been challenged to watch
module.exports = function(sequelize, DataTypes) {
    let Challenges = sequelize.define("Challenges", {

    });

    Challenges.associate = function(models) {

        // Challenges contain a reference to a movie
        Challenges.belongsTo(models.Movies, {
            foreignKey: {
                allowNull: false
            }
        });
        // Challenges belong to a User model
        Challenges.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Challenges;
}