const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('users', 'total', Sequelize.INTEGER)
      .then(x => 
        queryInterface.sequelize.query(
          `
            UPDATE users
            SET
              total = (SELECT COUNT (*)
                FROM users
                JOIN todos
                ON users.id = todos.userId
              )   
          `
        )    
      )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'total')
  }
};
