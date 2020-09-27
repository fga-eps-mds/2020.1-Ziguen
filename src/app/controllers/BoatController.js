import Boat from '../models/Boat'

class BoatController {

  async index(req,res){
    const { id } = req.query;
    const Boats = await Boat.findAll({id});
    return res.json(Boats);
  }

  async store(req, res) {

    const boatExists = await Boat.findOne({ 
      where: { name: req.body.name }, 
      where: { id: req.body.id}
    });

    if (boatExists) {
      return res.status(400).json({ error: 'Embarcação já Cadastrada' });
    }

    const { id ,name } = await Boat.create(req.body);

    return res.json({
      name,
      id
    }); 

  }


}

export default new BoatController(); 