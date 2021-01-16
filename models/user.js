// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
let bcrypt = require("bcryptjs");

//creates the User model
module.exports = function (sequelize, DataTypes) {
    let User = sequelize.define("User", {
        //User requires an email with a length of 1-250
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        //User requires a password with a length of 10-250
        //Password will be hashed and salted when stored
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
            freezeTableName: true
        }
    );

    User.associate = function (models) {
        User.hasMany(models.Challenge, {
            onDelete: "cascade"
        });
        User.hasMany(models.Watched, {
            onDelete: "cascade"
        });
    };

    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    User.addHook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    return User;
}