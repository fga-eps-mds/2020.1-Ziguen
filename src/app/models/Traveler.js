import bcrypt from 'bcryptjs';
import Sequelize, { Model } from 'sequelize';


class Traveler extends Model {
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
      cpf: Sequelize.STRING,
      email: Sequelize.STRING,
      telephone: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
    },
    {
      sequelize,
    });

    this.addHook('beforeSave', async traveler => {
      if(traveler.password){
        traveler.password_hash = await bcrypt.hash(traveler.password, 8)
      }
    });
    return this;
  }

  checkPassword(password){
    return bcrypt.compare(password, this.password_hash); 
  }
}
export default Traveler;