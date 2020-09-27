import * as  Yup from 'yup';
import Travel from '../models/Travel';

class TravelController {

    async index(req,res){
    const { id } = req.query;
    const travels = await Travel.findAll({id});
    return res.json(travels);
  }


  async store(req, res) {

    const travelExists = await Travel.findOne({ 
      where: { id: req.body.id}
    });

    if (travelExists) {
      return res.status(400).json({ error: 'Viagem já Cadastrado' });
    }

    const { id, origin, destiny, hour, date  } = await Travel.create(req.body);

    return res.json({
      id,
      origin,
      destiny,
      hour,
      date,
    });
  }

}

export default new TravelController(); 