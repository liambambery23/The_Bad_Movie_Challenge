//creates the User model
module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
        //User requires an email with a length of 1-250
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,250]
            }
        },
        //User requires a password with a length of 10-250
        //Password will be hashed and salted when stored
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10,250]
            }
        }
    });

    User.associate = function(models) {
        User.hasMany(models.Challenges, {
            onDelete: "cascade"
        });
        User.hasMany(models.Watched, {
            onDelete: "cascade"
        });
    }

    return User;
}