import bcrypt from 'bcryptjs';
import Sequelize, { Model } from 'sequelize';


class Admin extends Model {
  static init(sequelize){
    super.init(
      {
        name: Sequelize.STRING,
        cpf: Sequelize.STRING,
        email: Sequelize.STRING,
        telephone: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
      );

  this.addHook('beforeSave', async admin => {
    if(admin.password){
      admin.password_hash = await bcrypt.hash(admin.password, 8)
    }
  });
  return this;
  }
    
  checkPassword(password){
    return bcrypt.compare(password, this.password_hash); 
  }
}
export default Admin;