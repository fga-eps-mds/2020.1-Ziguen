const sequelize = require("sequelize");
const { date } = require("yup");

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('travels', { 
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        autoIcrement: true,
         
      },
      origin: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      destiny: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      hour: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.STRING,
        references: {model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      date: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.STRING,
        allowNull: false,
      }

    
    });
     
  },

  down: queryInterface => {
    return queryInterface.dropTable('travels');
  }
};