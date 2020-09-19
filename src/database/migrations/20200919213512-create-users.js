module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
        
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,

      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,

      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false

      },
      senha_hash: {
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