import Sequelize, { Model } from 'sequelize';


class Travel extends Model {
    static init(sequelize){
      super.init(
        {
          origin: Sequelize.STRING,
          destiny: Sequelize.STRING,
          hour: Sequelize.STRING,
          date: Sequelize.STRING,
        },
        {
            sequelize,
        }
        );
        return this;
    }
}
export default Travel;
