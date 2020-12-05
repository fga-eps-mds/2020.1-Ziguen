import * as  Yup from 'yup';
import Trip from '../models/Trip';
import Admin from '../models/Admin';


class TripController {


  async index(req,res){
    try{
      const {id} = req.query;
      const trips = await Trip.findAll({id});
      return res.json(trips);
      }catch(err){
        return res.status(500).json({ error: 'Falha ao listar' });
      }
  }


  async store(req, res) {

    try{
      const userExists = await Admin.findOne({ 
        where: { id: req.body.user_id}
      });
      const tripExists = await Trip.findOne({
        where: {origin: req.body.origin, hour: req.body.hour, date: req.body.date}
       
      })
      if (tripExists) {
        return res.status(400).json({ error: 'Viagem já existe' });
      }
      if (!userExists) {
        return res.status().json({ error: 'administrador não existe.' });
      }
    
     const {  origin, destiny, hour, date, user_id,  price, boat_id} = await Trip.create(req.body);
      
      return res.json({
        origin,
        destiny,
        hour,
        date,
        user_id,
        price,
        boat_id
      }); 
  
    }catch(err){
      return res.status(500).json({ error: 'Falha na criação' });
    }
  }

  async update(req,res){ 

    try{
      const tripExists = await Trip.findOne({
        where: {id: req.body.id}
      })
  
      if(!tripExists){
        return res.status(400).json({ error: 'Viagem não existe' });
      }
      
      const {origin, destiny, hour, date,  price} = await tripExists.update(req.body);
  
      return res.json({
        origin,
        destiny,
        hour,
        date,
        price
      })
  

    }catch(err){
      return res.status(500).json({ error: 'Falha no update' });
    }
  }

  async destroy(req, res) {

    try{
      const tripExists = await Trip.findOne({
        where: {id: req.body.id}
      })
  
      if (!tripExists) {
        return res.json({ error: 'Viagem não existe' });
      }
  
      await tripExists.destroy();
  
      return res.status(200).json({ message: 'Exclusão foi bem sucedida.' });
    }catch(err){
      return res.status(500).json({ error: 'Falha na exclusão' });
    }
  }

  async descript(req, res){
    try{
      const {id} = req.body;

      const trip = await Trip.findByPk(id);
  
      if(!trip){
        return res.json({error:"Essa viagem não existe."});
      }
      
      return res.json(trip);
    }catch(err){
      return res.status(500).json({ error: 'Falha ao listar' });
    }
  
  }
}

export default new TripController(); 