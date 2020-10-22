module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('travels', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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
        type: Sequelize.INTEGER,
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