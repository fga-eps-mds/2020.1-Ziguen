import {Router} from 'express';
import User from './app/models/User';

const routes = new Router();


routes.get('/t1', (req, res)=> {
    return res.json({id: true})
})



routes.get('/t', async (req,res)=> {
    const user = await User.create({
        id: '2',
        nome: 'tew',
        email: 'adm@gmaiwel.com',
        cpf: '00242wew222',
        telefone: '0800453sd332',
        senha_hash: '123sdsd456',
    });

    return res.json(user)
}); 



export default routes;  