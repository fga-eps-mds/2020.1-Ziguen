import * as  Yup from 'yup';
import Travel from '../models/Travel';
import Admin from '../models/Admin';


class TravelController {


  async index(req,res){
    const {id} = req.query;
    const travels = await Travel.findAll({id});
    return res.json(travels);
  }


  async store(req, res) {

    const schema = Yup.object().shape({
      origin: Yup.string().required(),
      destiny: Yup.string().required(),
      hour: Yup.string().required(),
      date: Yup.string().required(),
      user_id: Yup.number().required()
    })

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Verifique se todos os campos foram preenchidos' });
    }

    const userExists = await Admin.findOne({ 
      where: { id: req.body.user_id}
    });
    const travelExists = await Travel.findOne({
      where: {origin: req.body.origin, hour: req.body.hour, date: req.body.date}
     
    })
    if (travelExists) {
      return res.status(400).json({ error: 'Viagem já existe' });
    }
    if (!userExists) {
      return res.status(400).json({ error: 'administrador não existe.' });
    }
  
   const {  origin, destiny, hour, date, user_id} = await Travel.create(req.body);
    
    return res.json({
      origin,
      destiny,
      hour,
      date,
      user_id
    }); 
  }

  async update(req,res){ 

    const schema = Yup.object().shape({
      origin: Yup.string().required(),
      destiny: Yup.string().required(),
      hour: Yup.string().required(),
      date: Yup.string().required(),
    })

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Verifique se todos os campos foram preenchidos' });
    }

    const travelExists = await Travel.findOne({
      where: {id: req.body.id}
    })

    if(!travelExists){
      return res.status(400).json({ error: 'Viagem não existe' });
    }
    
    const {origin, destiny, hour, date} = await travelExists.update(req.body);

    return res.json({
      origin,
      destiny,
      hour,
      date
    })


  }

  async destroy(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number()
      .required()
   });

    if (!(await schema.isValid(req.body))) {
      return res
      .status(400)
      .json({ error: 'Falha na validação das informações.' });
    }

  
   const travelExists = await Travel.findOne({
     where: {id: req.body.id}
   })

   if (!travelExists) {
     return res.json({ error: 'Viagem não existe' });
   }

    await travelExists.destroy();

    return res.status(200).json({ message: 'Exclusão foi bem sucedida.' });
  }

  async descript(req, res){
    const schema = Yup.object().shape({
      id: Yup.number().required().positive()
    });
    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error:"Informações incoerentes"});
    }

    const {id} = req.body;

    const travel = await Travel.findByPk(id);

    if(!travel){
      return res.json({error:"Essa viagem não existe."});
    }
    
    return res.json(travel);
  }


}

export default new TravelController(); 