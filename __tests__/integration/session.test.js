import request from 'supertest'
import app from '../../src/app'
import truncate from '../util/truncate'
import factory from '../factores'


describe('Session', () => {
 beforeEach(async () => {
     await truncate();
 })
});

describe('Session', () => {

    it('returns a token if the user is authenticated', async () => {
        const adm = (await factory.create('Admin')).dataValues;
    
        const session = await request(app)
        .post('/sessions')
        .send({
            email: adm.email,
            password: adm.password
        })
        expect(session.body).toHaveProperty('token');
        expect(session.status).toBe(200);
    
    })
    it('Does not provide a token for invalid accounts with status 401.', async () => {
        const adm = (await factory.create('Admin')).dataValues;
    
        const session = await request(app)
        .post('/sessions')
        .send({
            email: "teste1",
            password: "215487"
        })
        expect(session.status).toBe(401);
    
    })

})


