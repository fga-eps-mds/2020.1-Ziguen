require('../../bootstrap')

import * as  Yup from 'yup';
import Admin from '../models/Admin';


class AdminController{

  async index(req,res){
    const { name } = req.query;
    const admins = await Admin.findAll({name});
    return res.json(admins);
  }

  async descript(req, res){
    const schema = Yup.object().shape({
      id: Yup.number().required().positive()
    });
    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error:"Informações incoerentes"});
    }

    const {id} = req.body;

    const admin = await Admin.findByPk(id);

    if(!traveler){
      return res.json({error:"Administrador inexistente"});
    }
    
    return res.json(admin);
  }

  async store(req, res) {

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cpf: Yup.string().required(),
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

    const adminExists = await Admin.findOne({ 
      where: { cpf: req.body.cpf }, 
    });

    if (adminExists) {
      return res.status(400).json({ error: 'Usuario já Cadastrado' });
    }

    const { id,name, cpf, email,telephone } = await Admin.create(req.body);

    return res.json({
      id,
      name,
      cpf,
      email,
      telephone

    });
  }

  async update(req,res){
    const { email, oldpassword } = req.body;

    const admin = await Admin.findByPk(req.userId);

    if(email !== admin.email){
      const adminExists = await Admin.findOne({ 
        where: { email } 
      });
  
      if (!adminExists) {
        return res.status(400).json({ error: 'Administrador não existe' });
      }
    }
    if(oldpassword && !(await user.checkPassword(oldpassword))){

      return res.status(400).json({ error: 'Senha incorreta.' });
    }

    const  {id , name, email } = await admin.update(req.body);


    return res.json({
      id,
      name,
      email,
    });

  }

  async destroy(req, res) {

    const admin = await Admin.findOne({ 
      where: { cpf: req.body.cpf }, 
    });

   if (!admin) {
     return res.json({ error: 'Usuario não existe' });
   }

    await admin.destroy(req.body);

    return res.status(200).json({ message: 'Exclusão foi bem sucedida.' });
  }

}

export default new AdminController(); 