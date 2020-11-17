import Sequelize, { Model } from 'sequelize';


class Passage extends Model {
    static init(sequelize){
      super.init(
        {
          price: Sequelize.NUMBER,
          user_id: Sequelize.NUMBER,
          travaler_id: Sequelize.NUMBER,
          trip_id: Sequelize.NUMBER,
          
        },
        {
            sequelize,
        }
        );
        return this;
    }
}
export default Passage;
