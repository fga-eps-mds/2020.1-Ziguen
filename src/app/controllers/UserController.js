import * as  Yup from 'yup';
import User from '../models/User';


class UserController{

  async index(req,res){
    const { name } = req.query;
    const users = await User.findAll({name});
    return res.json(users);
  }

  async store(req, res) {

    const schema = Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string().required(),
      email: Yup.string()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
      telephone: Yup.string()
        .required()


    })

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Falha na validação das informações.' });
    }

    const userExists = await User.findOne({ 
      where: { email: req.body.email }, 
      where: { id: req.body.id}
    });

    if (userExists) {
      return res.status(400).json({ error: 'Usuario já Cadastrado' });
    }

    const { id, name, email } = await User.create(req.body);

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

    const  {id , name } = await user.update(req.body);


    return res.json({
      id,
      name,
      email,
    });

  }

  async destroy(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number()
      .required()
      .positive()
   });

    if (!(await schema.isValid(req.body))) {
      return res
      .status(400)
      .json({ error: 'Falha na validação das informações.' });
    }

   const { id } = req.body;

   const user = await User.findByPk(id);

   if (!user) {
     return res.json({ error: 'Usuario não existe' });
   }

    await user.destroy();

    return res.status(200).json({ message: 'Exclusão foi bem sucedida.' });
  }


}

export default new UserController(); 