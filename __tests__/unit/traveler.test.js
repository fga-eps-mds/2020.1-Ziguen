import request from 'supertest'
import app from '../../src/app'
import bcrypt from 'bcryptjs'
import truncate from '../util/truncate'
import factory from '../factores'

describe('Traveler', () => {
    beforeEach(async() =>{
    await truncate();
    })
})

async function travelerSession() {
    const user = (await factory.create('Traveler')).dataValues;

    const session = await request(app)
      .post('/sessions/trav')
      .send({
        email: user.email,
        password: user.password,
      });


    return session.body.token;
}

describe('Create', () => {

    it("return status 200 to successful", async() => {
        const traveler = await factory.attrs('Traveler');
       
        const response = await request(app).post('/travelers').send(traveler);
        expect(response.status).toBe(200);
    })

    it("return status 400 to failure", async() => {
        const traveler = 0;
       
        const response = await request(app).post('/travelers').send(traveler);
        expect(response.status).toBe(400);
    })

    it('returns if the account is already registered', async() => {

        const user = await factory.create('Traveler');
        await request(app).post('/travelers').send(user);

        const user1 = await factory.create('Traveler');
        const response1 = await request(app).post('/travelers').send(user1);
    
        expect(response1.status).toBe(400);
    })

})

describe('index', () => {
    it('returns status 200 to successful', async() => {
      
        const user = await factory.create('Traveler');
        await request(app).post('/travelers').send(user);
        const response = await request(app)
            .get('/travelers')
            .set('authorization', `Bearer ${await travelerSession()}`)
        expect(response.status).toBe(200);
    });

    it('returns status 401 to failure', async() => {
        await factory.createMany('Traveler',1);
        const tok = 123456;
        const response = await request(app)
            .get('/travelers')
            .set('authorization', `Bearer ${tok}`)
        expect(response.status).toBe(401);
    });

})

describe('delete', () => {
    it('returns status 200 to successful', async() => {
        await factory.attrs('Traveler');
        const response = await request(app)
            .delete('/travelers')
            .set('authorization', `Bearer ${await travelerSession()}`)
        expect(response.status).toBe(200);

    })
    
})