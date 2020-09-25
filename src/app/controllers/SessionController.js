import jwt from 'jsonwebtoken'
import User from '../models/User'

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
}

export default new SessionController();