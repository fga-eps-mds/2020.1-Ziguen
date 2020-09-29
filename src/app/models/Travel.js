import Sequelize, { Model } from 'sequelize';


class Travel extends Model {
    static init(sequelize){
      super.init(
        {
          origin: Sequelize.STRING,
          destiny: Sequelize.STRING,
          hour: Sequelize.STRING,
          date: Sequelize.STRING,
          user_id: Sequelize.NUMBER,
        },
        {
            sequelize,
        }
        );
        return this;
    }
}
export default Travel;
