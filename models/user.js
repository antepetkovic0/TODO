module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: /^[a-z]+$/i,
                    msg: "First name should contain only letters."
                },
                len: {
                    args: [2, 10],
                    msg: "First name must be between 2 and 10 characters."
                },
            }
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: /^[a-z]+$/gi,
                    msg: "Last name should contain only letters."
                },
                len: {
                    args: [2, 20],
                    msg: "Last name must be between 2 and 20 characters."
                },
            }
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                is: {
                    args: /^[\w]+$/gi,
                    msg: "Username should contain any letter, digit or underscore."
                },
                len: {
                    args: [2, 15],
                    msg: "Username must be between 2 and 15 characters."
                },
            }
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },       
    }, {});
    return User;
}
