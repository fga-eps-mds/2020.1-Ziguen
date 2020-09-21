import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ 
      where: { email: req.body.email } 
    });

    if (userExists) {
      return res.status(400).json({ error: 'Usuario já Cadastrado' });
    }

    const { id, nome, email } = await User.create(req.body);

    return res.json({
      id,
      email,
    });
  }
  async update(req,res){
    const { email, oldpassword } = req.body;

    const user = await User.findByPk(req.userId);

    if(email !== user.email){

      const userExists = await User.findOne({ 
        where: { email } 
      });
  
      if (userExists) {
        return res.status(400).json({ error: 'Usuario já Cadastrado.' });
      }
    }
    if(oldpassword && !(await user.checkPassword(oldpassword))){

      return res.status(400).json({ error: 'Senha incorreta.' });
    }

    const  {id , nome } = await user.update(req.body);


    return res.json({
      id,
      nome,
      email,
    });

  }
}

export default new UserController(); 