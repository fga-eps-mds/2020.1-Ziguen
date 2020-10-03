import jwt from 'jsonwebtoken'
import User from '../models/User'
import Traveler from '../models/Traveler'

import authConfig from '../../config/auth'

class SessionController {
    async store(req,res){
        const {email, password } = req.body;

        // Verificando email
        const user = await User.findOne({ where: {email:email}})
        if(!user){
            return res.status(401).json({ error: 'Usuário não existe.'});
        }   
        // Verificar password
        if(!(await user.checkPassword(password))){
            return res.status(401).json({ error: 'password incorreta.'});
        }

        const {id, name} = user;

        return res.json({
            user: {
                id,
                name,
                email
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            })
        })
    }

    async store_trav(req,res){
        const {email, password } = req.body;

        // Verificando email
        const traveler = await Traveler.findOne({ where: {email:email}})
        if(!traveler){
            return res.status(401).json({ error: 'Usuário não existe.'});
        }   
        // Verificar password
        if(!(await traveler.checkPassword(password))){
            return res.status(401).json({ error: 'password incorreta.'});
        }

        const {id, name} = traveler;

        return res.json({
            traveler: {
                id,
                name,
                email
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            })
        })
    
    }
}

export default new SessionController();