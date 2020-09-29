import Sequelize, { Model } from 'sequelize';


class Boat extends Model {
    static init(sequelize){
      super.init(
        {
          name: Sequelize.STRING,
          user_id: Sequelize.NUMBER
        },
      {
        sequelize,
      }
      );
      return this;
    }
    
}
export default Boat;