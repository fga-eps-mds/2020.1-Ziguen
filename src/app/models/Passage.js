import Sequelize, { Model } from 'sequelize';


class Passage extends Model {
    static init(sequelize){
      super.init(
        {
          price: Sequelize.STRING,
          admin_id: Sequelize.NUMBER,
          traveler_id: Sequelize.NUMBER,
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
