require("dotenv").config({
  path: process.env.NODE_ENV == 'test' ? '.env.test' : 'database.env'
})


module.exports = {
    dialect: 'postgres'|| 'postgres',
    storage: './__tests__/database.sqlite',
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
  