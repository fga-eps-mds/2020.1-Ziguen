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
    static associate(models){
      this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
    }
}
export default Travel;
