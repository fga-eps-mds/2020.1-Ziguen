module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('travels', { 
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        //autoIcrement: true,
         
      },
      origem: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      destino: {
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