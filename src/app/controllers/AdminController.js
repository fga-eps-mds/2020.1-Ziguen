require('../../bootstrap')

import Admin from '../models/Admin';

class AdminController{

  async index(req,res){
    try{
      const { name } = req.query;
      const admins = await Admin.findAll({name});
      return res.json(admins);
    }catch(err){
      return res.status(500).json({ error: 'Falha ao listar' });
    }
  }

  async descript(req, res){
    try{
      const {id} = req.body;

      const admin = await Admin.findByPk(id);

      if(!traveler){
        return res.json({error:"Administrador inexistente"});
      }
    
      return res.json(admin);
    } catch(err){
      return res.status(500).json({ error: 'Falha ao listar' });
    }

  }

  async store(req, res) {

    try {
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

    }catch(err){
      return res.status(500).json({ error: 'Falha na criação' });
    }
  }

  async update(req,res){
    try{
      const { id } = req.body;
      const adminExists = await Admin.findByPk(id)
      
      if(!adminExists){
        return res.status(400).json({ error: 'Usuario não existe' });
      }

      const { name, cpf, email, telephone, password} = await adminExists.update(req.body)

      return res.json({
        name,
        cpf,
        email,
        telephone,
        password
      })

    }catch(err){
      return res.status(500).json({ error: 'Falha no update' });
    }
  }

  async destroy(req, res) {

    try {

      const {id} = req.body;
      const adminExists = await Admin.findByPk(id)
  
      if (!adminExists) {
        return res.json({ error: 'Usuario não existe' });
      }
      await adminExists.destroy();

      return res.status(200).json({ message: 'Exclusão foi bem sucedida.' });

      }catch(err){
        return res.status(500).json({ error: 'Falha na exclusão' });
      }
  }

}

export default new AdminController(); 