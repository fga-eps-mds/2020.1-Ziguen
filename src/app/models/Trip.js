import Sequelize, { Model } from 'sequelize';


class Trip extends Model {
    static init(sequelize){
      super.init(
        {
          origin: Sequelize.STRING,
          destiny: Sequelize.STRING,
          hour: Sequelize.STRING,
          date: Sequelize.STRING,
          user_id: Sequelize.NUMBER,
          price: Sequelize.STRING,
          boat_id: Sequelize.STRING
        },
        {
            sequelize,
        }
        );
        return this;
    }
}
export default Trip;
