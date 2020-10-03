import Sequelize from 'sequelize';
import Travel from '../app/models/Travel';
import User from '../app/models/User';
import Traveler from '../app/models/Traveler';

import databaseConfig from '../config/database';

const models = [User,Traveler, Travel];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection))
  }
}

export default new Database();
