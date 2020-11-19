import * as  Yup from 'yup';
import Trip from '../models/Trip';
import Passage from '../models/Passage';

class PassageController {

  async index(req,res){
    try{
      const {id} = req.query;
      const passage = await Passage.findAll({id});
      return res.json(passage);
      }catch(err){
        return res.status(500).json({ error: 'Falha ao listar' });
      }
  }

  async store(req, res) {
        
    try{
      const tripExists = await Trip.findOne({ 
        where: { id: req.body.trip_id}
      });

      if (!tripExists) {
        return res.status(400).json({ error: 'Viagem não existe.' });
      }
      const { price, traveler_id, trip_id } = await Passage.create(req.body);  
        return res.json({
          price,
          traveler_id,
          trip_id
          }); 
    
    }catch(err){
        return res.status(500).json({ error: 'Falha na criação da passagem' });
     }
  }

  async update(req,res){ 

    try{
      const passageExists = await Passage.findOne({
        where: {id: req.body.id}
      })
  
      if(!passageExists){
        return res.status(400).json({ error: 'Viagem não existe' });
      }
      
      const {price, traveler_id, trip_id} = await passageExists.update(req.body);
  
      return res.json({
        price,
        traveler_id,
        trip_id
      })
  

    }catch(err){
      return res.status(500).json({ error: 'Falha no update' });
    }
  }

  async destroy(req, res) {

    try{
      const passageExists = await Passage.findOne({
        where: {id: req.body.id}
      })
  
      if (!passageExists) {
        return res.json({ error: 'Passagem não existe' });
      }
  
      await passageExists.destroy();
  
      return res.status(200).json({ message: 'Exclusão foi bem sucedida.' });
    }catch(err){
      return res.status(500).json({ error: 'Falha na exclusão' });
    }
  }


}
export default new PassageController(); 