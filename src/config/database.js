module.exports = {
    dialect: 'postgres',
    host: 'db',
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    define: {
      timestamp: true,
      underscored: true,
      underscoredAll: true
    }
  };