import Sequelize from 'sequelize';
import Trip from '../app/models/Trip';
import Admin from '../app/models/Admin';
import Traveler from '../app/models/Traveler';
import Boat from '../app/models/Boat'
import Passage from '../app/models/Passage'
import databaseConfig from '../config/database';


const models = [Admin,Traveler, Trip, Boat, Passage];

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
