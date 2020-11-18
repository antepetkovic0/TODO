module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
      firstname: {
          type: DataTypes.STRING,
          allowNull: false
      },
      lastname: {
          type: DataTypes.STRING,
          allowNull: false
      },
      username: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false
      },
      email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false
      },   
      password: {
          type: DataTypes.STRING,
          allowNull: false
      }    
  }, {});

  User.associate = (models) => {
    User.hasMany(models.Todo, {
      as: 'todos',
      foreignKey: 'userId'
    });
  };

  return User;
}