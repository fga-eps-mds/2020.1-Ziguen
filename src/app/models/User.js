import Sequelize, { Model } from 'sequelize';

class User extends Model {
    static init(sequelize){
        super.init(
            {
            nome: Sequelize.STRING,
            email: Sequelize.STRING,
            cpf: Sequelize.STRING,
            telefone: Sequelize.STRING,
            senha_hash: Sequelize.STRING,
            },
            {
            sequelize,
            }
        );
        
    }
}
export default User;