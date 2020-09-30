import Sequelize from 'sequelize';
import Travel from '../app/models/Travel';
import User from '../app/models/User';
import Boat from '../app/models/Boat'

import databaseConfig from '../config/database';
import Boat from '../app/models/Boat';

const models = [User, Travel,Boat];

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
