import {Router} from 'express';
import User from './app/models/User';

const routes = new Router();


routes.get('/t1', (req, res)=> {
    return res.json({id: true})
})



routes.get('/t', async (req,res)=> {
    const users = await User.create({
        nome: 'admin',
        email: 'adm@gmail.com',
        password_hash: '123456',
        provider: true
    });

    return res.json(users)
}); 


export default routes;  