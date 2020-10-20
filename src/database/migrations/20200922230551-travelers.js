module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('travelers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,

      },
      telephone: {
        type: Sequelize.STRING,
        allowNull: false

      },
      password_hash: {
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
    return queryInterface.dropTable('travelers');
  }
};