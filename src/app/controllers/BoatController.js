import Boat from '../models/Boat'
import Admin from '../models/Admin'

class BoatController {

  async index(req,res){
    try {
      const { id } = req.query;
      const Boats = await Boat.findAll({id});
      return res.json(Boats);
    }catch(err){
      return res.status(500).json({ error: 'Falaha na exclusão' });
    }
  }

  async store(req, res) {
    try{
      const boatExists = await Boat.findOne({    
        where: {name: req.body.name}   
     
      });

      const userExists = await Admin.findOne({
        where: { id: req.body.user_id}
      });

      if (!userExists) {
        return res.status(400).json({ error: 'Administrador inexistente' });
      };

      if (boatExists) {
        return res.status(400).json({ error: 'Embarcação já Cadastrada' });
      };

      const { name, capacity, user_id } = await Boat.create(req.body);

      return res.json({
        name,
        capacity,
        user_id
      });
    }catch(err){
      return res.status(500).json({ error: 'Falaha na exclusão' });
    } 

  }

   async update(req,res){

    try{
      const boatExists = await Boat.findOne({
        where: { id: req.body.id }
      })    
      if(!boatExists){
        return res.status(400).json({ error: 'Embarcação não existe' });
      }
      const { name, capacity } = await boatExists.update(req.body);
      return res.json({
        name,
        capacity
      })
    }catch(err){
      return res.status(500).json({ error: 'Falaha na exclusão' });
    }
  };

  async destroy(req, res) {
    try{
      const boatExists = await Boat.findOne({
        where: { id: req.body.id }
      });

      if (!boatExists) {
        return res.json({ error: 'Usuario não existe' });
      } 

      await boatExists.destroy();
      return res.status(200).json({ message: 'Exclusão foi bem sucedida.' });
    }catch(err){
      return res.status(500).json({ error: 'Falaha na exclusão' });
    }
  }

  async descript(req, res){
    
    try{
      const {id} = req.body;
      const boats = await Boat.findByPk(id);
      if(!boats){
        return res.json({error:"Embarcação não existe"});
      }
      return res.json(boats);
    }catch(err){
      return res.status(500).json({ error: 'Falaha na exclusão' });
    } 
  }


}

export default new BoatController(); 