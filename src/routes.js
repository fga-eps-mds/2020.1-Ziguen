import {Router} from 'express';

const routes = new Router();


routes.get('/teste',(req,res)=> {
    return res.json({ok: true})
})


export default routes;