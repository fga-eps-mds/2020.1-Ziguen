require('../bootstrap.js');

module.exports = {
    dialect:process.env.DB_DIALECT  || 'postgres',
    host: 'db',
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    storage: './__tests__/database.sqlite',

    
    define: {
      timestamp: true,
      underscored: true,
      underscoredAll: true
    }
  };
  