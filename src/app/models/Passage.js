import Sequelize, { Model } from 'sequelize';


class Passage extends Model {
    static init(sequelize){
      super.init(
        {
          traveler_id: Sequelize.NUMBER,
          trip_id: Sequelize.NUMBER,
          
        },
        {
            sequelize
        }
        );
        return this;
    }
}
export default Passage;
