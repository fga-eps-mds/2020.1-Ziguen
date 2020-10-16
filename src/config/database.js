

module.exports = {
    dialect:'postgres',
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    storage: './__tests__/database.sqlite',

    
    define: {
      timestamp: true,
      underscored: true,
      underscoredAll: true
    }
  };
  