import {Router} from 'express';
import User from './app/models/User';

const routes = new Router();


routes.get('/t1', (req, res)=> {
    return res.json({id: true})
})



routes.get('/t', async (req,res)=> {
    const user = await User.create({
        nome: 'admin',
        email: 'adm@gmail.com',
        cpf: '00242222',
        telefone: '0800453332',
        senha_hash: '123456',
    });

    return res.json(user)
}); 


export default routes;  