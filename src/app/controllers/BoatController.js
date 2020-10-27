import Boat from '../models/Boat'
import * as  Yup from 'yup';
import User from '../models/User'

class BoatController {

  async index(req,res){
    const { id } = req.query;
    const Boats = await Boat.findAll({id});
    return res.json(Boats);
  }

  async store(req, res) {

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      capacity: Yup.number().required(),
      user_id: Yup.number().required(),
   });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Falha na validação das informações.' });
    }

    const boatExists = await Boat.findOne({    
      where: {name: req.body.name}   
     
    });

    const userExists = await User.findOne({
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

  }

   async update(req,res){

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      capacity: Yup.number().required()
   
    });
    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Preencha todos os campos' });
    }

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

  };

  async destroy(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required()
   });

    if (!(await schema.isValid(req.body))) {
      return res
      .status(400)
      .json({ error: 'Falha na validação das informações.' });
    }

   const boatExists = await Boat.findOne({
    where: { id: req.body.id }
   });

   if (!boatExists) {
     return res.json({ error: 'Usuario não existe' });
   }

    await boatExists.destroy();

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

    const boats = await Boat.findByPk(id);

    if(!boats){
      return res.json({error:"Embarcação não existe"});
    }
    
    return res.json(boats);
  }


}

export default new BoatController(); 