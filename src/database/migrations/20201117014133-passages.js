module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('passages', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      traveler_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      trip_id: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('passages');
  }
};