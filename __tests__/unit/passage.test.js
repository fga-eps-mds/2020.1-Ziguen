import request from 'supertest'
import app from '../../src/app'
import bcrypt from 'bcryptjs'
import truncate from '../util/truncate'
import factory from '../factores'


describe('Passage', () => {
    beforeEach(async() =>{
    await truncate();
    })
})
describe('Admin', () => {
    beforeEach(async() =>{
    await truncate();
    })
})

describe('Traveler', () => {
    beforeEach(async() =>{
    await truncate();
    })
})

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
    it('returns status 400 to failure', async() => {

        const passage = await factory.attrs('Passage',{
            price: "200",
            traveler_id: 1,
            trip_id: 1
        });
        const response = await request(app).post('/passages').send(passage);
    
        expect(response.status).toBe(200);
    })

    it('should return status 400, if data is null', async() => {
        
       
        const passage = await factory.attrs('Passage',{
            price: null,
            traveler_id: null,
            trip_id: null
        });
        const response = await request(app).post('/passages').send(passage);
    
        expect(response.status).toBe(400);
    })
})