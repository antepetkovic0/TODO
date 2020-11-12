module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define("Todo", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }        
    }, {});
    return Todo;
}

