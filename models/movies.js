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

    return Movies;
}