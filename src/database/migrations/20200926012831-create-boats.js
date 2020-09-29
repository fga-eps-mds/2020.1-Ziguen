module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('boats', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIcrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_id: {
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
    return queryInterface.dropTable('boats');
  }
};