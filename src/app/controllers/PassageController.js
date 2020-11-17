import * as  Yup from 'yup';
import Trip from '../models/Trip';
import Passage from '../models/Passage';

class PassageController {
    async store(req, res) {
        
        try{
/*           const tripExists = await Trip.findOne({ 
            where: { id: req.body.trip_id}
          });
          if (passageExists) {
            return res.status(400).json({ error: 'Passagem já existe' });
          }
          if (!tripExists) {
            return res.status(400).json({ error: 'Viagem não existe.' });
          }
 */        
         const { price, admin_id, traveler_id, trip_id } = await Passage.create(req.body);
          
          return res.json({
            price,
            admin_id,
            traveler_id,
            trip_id
            }); 
      
        }catch(err){
            
          return res.status(500).json({ error: 'Falha na criação da passagem' });
        }
      }
}
export default new PassageController(); 