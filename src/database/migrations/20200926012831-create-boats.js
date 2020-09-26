module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('users', { 
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        autoIcrement: true,
         
      },
      name: {
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
    return queryInterface.dropTable('users');
  }
};