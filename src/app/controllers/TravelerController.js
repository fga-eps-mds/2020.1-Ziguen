import * as  Yup from 'yup';
import Traveler from '../models/Traveler';

class TravelerController{
  async list(req, res){
    const {name} = req.query;
    const travelers = await Traveler.findAll({name});
    return res.json(travelers);
  }
  
  async store(req, res){
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required().min(6),
    })
    
    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Falha na validação das informações.' });
    }
    
    const travelerExists = await Traveler.findOne({ 
      where: { email: req.body.email }, 
      where: { id: req.body.id}
    });
    
    if (travelerExists) {
      return res.status(400).json({ error: 'Usuario já Cadastrado' });
    }
    
    const { id, name, email } = await Traveler.create(req.body);
    
    return res.json({
      id,
      name,
      email,
    }); 
  }

  async update(req,res){
    const { email, oldpassword } = req.body;

    const traveler = await Traveler.findByPk(req.userId);

    if(email != traveler.email){
      const travelerExists = await Traveler.findOne({ 
        where: { email } 
      });
  
      if (travelerExists) {
        return res.status(400).json({ error: 'Usuario já Cadastrado.' });
      }
    }

    if(oldpassword && !(await traveler.checkPassword(oldpassword))){
      return res.status(400).json({ error: 'Senha incorreta.' });
    }

    const  {id , name } = await traveler.update(req.body);


    return res.json({
      id,
      name,
      email,
    });
  }

}


export default new TravelerController();
