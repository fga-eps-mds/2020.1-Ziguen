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
      id: Yup.number().required(),
      user_id: Yup.number().required(),
   });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Falha na validação das informações.' });
    }

    const boatExists = await Boat.findOne({       
      where: { id: req.body.id}
    });

    const userExists = await User.findOne({
      where: {id: req.body.user_id}
    });

    if (!userExists) {
      return res.status(400).json({ error: 'Administrador inexistente' });
    };

    if (boatExists) {
      return res.status(400).json({ error: 'Embarcação já Cadastrada' });
    };

    const { id ,name, user_id } = await Boat.create(req.body);

    return res.json({
      id,
      name,
      user_id
    }); 

  }

   async update(req,res){

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      id: Yup.number().required(),
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

    const { name } = await boatExists.update(req.body);


    return res.json({
      name,
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


}

export default new BoatController(); 