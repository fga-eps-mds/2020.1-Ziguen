import Traveler from '../models/Traveler';

class TravelerController{
  async index(req, res){
    try{
      const {name} = req.query;
      const travelers = await Traveler.findAll({name});
      return res.json(travelers);
    }catch(err){
      return res.status(500).json({error: 'Falha ao listar'})
    }
  }
  
  async store(req, res){
    try{
      const travelerExists = await Traveler.findOne({ 
        where: { cpf: req.body.cpf }, 
      });
    
      if (travelerExists) {
        return res.status(400).json({ error: 'Usuario já Cadastrado' });
      }
    
      const {  name, cpf, email } = await Traveler.create(req.body);
    
      return res.json({
        name,
        cpf,
        email,
      }); 
    }catch(err){
      return res.status(400).json({ error: 'Falha na validação das informações.' });
    }
  }

  async update(req,res){
    try{
      const { id } = req.body;

      const traveler = await Traveler.findByPk(req.userId);
  
      if (!travelerExists) {
        return res.status(400).json({ error: 'Usuario não existe.' });
      }

      const {name,cpf,email,telephone,password} = await adminExists.update(req.body)

      return res.json({
        name,
        cpf,
        email,
        telephone,
        password
      });
    }catch(err){
      return res.status(400).json({ error: 'Usuario não existe.' });
    }
  }

  async destroy(req, res){
    try{
      const {id} = req.body;
      const traveler = await Traveler.findByPk(id);

      if(!traveler){
        return res.json({error:"Usuário inexistente"});
      }
      await traveler.destroy();
      return res.status(200).json({message:"excluído com sucesso"});
    
    }catch(err){
      return res.status(400).json({ error: 'falha na exclusão.' });
    }
  }

  async descript(req, res){
    try{
      const {id} = req.body;
      const traveler = await Traveler.findByPk(id);

      if(!traveler){
        return res.json({error:"Usuário inexistente"});
      }
    
      return res.json(traveler);
    }catch(err){
      return res.status(400).json({ error: 'falha de informações.' });
    }
  }
}


export default new TravelerController();
