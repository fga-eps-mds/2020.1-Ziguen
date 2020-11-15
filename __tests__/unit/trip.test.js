import request from 'supertest'
import app from '../../src/app'
import bcrypt from 'bcryptjs'
import truncate from '../util/truncate'
import factory from '../factores'


describe('Trip', () => {
    beforeEach(async() =>{
    await truncate();
    })
})

async function adminSession() {
    const user = (await factory.create('Admin')).dataValues;

    const session = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: user.password,
      });


    return session.body.token;
}


describe('Create', () => {
    it('Create new trip and return status 200 to sucessful', async() => {

        const user = await factory.attrs('Admin');
        await request(app).post('/admins').send(user);
        
        const trip = await factory.attrs('Trip',{
            user_id: 1
        });
        const response = await request(app).post('/trips').send(trip);
        expect(response.status).toBe(200);
    })

    it('return status 400 to failure', async() => {
        
        const trip = await factory.attrs('Trip',{
            user_id: null
        });
        const response = await request(app).post('/trips').send(trip);
        expect(response.status).toBe(500);
    })

    it('return 500 status if admin does not exist', async() => {
        
        const trip = await factory.attrs('Trip',{
            user_id: 99999
        });
        const response = await request(app).post('/trips').send(trip);
        expect(response.status).toBe(500);
    })

  
})

describe('index', () => {
    it("list all trip and return status 200 to successful", async() => {

        await factory.attrs('Trip');
            const response = await request(app)
                .get('/trips')
                .set('authorization', `Bearer ${await adminSession()}`)
            expect(response.status).toBe(200);
    })

})

describe('descript', () => {
    it("list all trip and return status 404 to failure", async() => {

       const trip = await factory.attrs('Trip');
       await request(app).post('/trips').send(trip);
            const response = await request(app)
                .get('/trips:id')
                .send({
                    id:1
                })
                .set('authorization', `Bearer ${await adminSession()}`)
            expect(response.status).toBe(404);
    })

})


describe('delete', () => {
 
    it('returns status 500 to failure', async() => {
        const response = await request(app)
            .delete('/trips')
            .set('authorization', `Bearer ${await adminSession()}`)
        expect(response.status).toBe(500);
    })
    
})