import bcrypt from 'bcryptjs';
import Sequelize, { Model } from 'sequelize';


class User extends Model {
    static init(sequelize){
      super.init(
        {
          nome: Sequelize.STRING,
          email: Sequelize.STRING,
          cpf: Sequelize.STRING,
          telefone: Sequelize.STRING,
          senha: Sequelize.VIRTUAL,
          senha_hash: Sequelize.STRING,
        },
      {
        sequelize,
      }
      );

      this.addHook('beforeSave', async user => {
        if(user.senha){
          user.senha_hash = await bcrypt.hash(user.senha, 8)
        }
      });
      return this;
    }
    
    checkPassword(senha){
     /*  return bcrypt.compare(senha, this.senha_hash); */
     return senha === this.senha_hash;
    }

}
export default User;