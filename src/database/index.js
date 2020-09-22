import Sequelize from 'sequelize';
import User from '../app/models/User';
import Traveler from '../app/models/Traveler';

import databaseConfig from '../config/database';

const models = [User,Traveler];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
