import Sequelize from 'sequelize';
import TravelController from '../app/controllers/TravelController';
import Travel from '../app/models/Travel';
import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User, Travel];

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
