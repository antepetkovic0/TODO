module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
      title: {
          allowNull: false,
          type: DataTypes.STRING
      },
      completed: {
          allowNull: false,
          type: DataTypes.BOOLEAN
      },
      description: {
          allowNull: true,
          type: DataTypes.STRING
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER
      }       
  }, {});

  Todo.associate = (models) => {
      Todo.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId'
      });
  };

  return Todo;
};