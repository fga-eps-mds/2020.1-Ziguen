import request from 'supertest'
import app from '../../src/app'
import bcrypt from 'bcryptjs'
import truncate from '../util/truncate'
import factory from '../factores'
import { response } from 'express'


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

        const user = await factory.attrs('Admin');
        await request(app).post('/admins').send(user);

        const trip = await factory.attrs('Trip',{
            user_id: 1
        });
        await request(app).post('/trips').send(trip);

        const traveler = await factory.attrs('Traveler');
        await request(app).post('/travelers').send(traveler);

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

describe('Update', () => {
    it('Should return status 401, if Authorization error', async() =>{
        const tok = 1234;

        const passage = await factory.attrs('Passage',{
            price: "100",
            traveler_id: 1,
            trip_id: 1,
        });
        await request(app).post('/passages').send(passage);

        await request(app).put('/admins').set('authorization',tok)

        const response = await request(app).put('/passages').send(passage);
        
        expect(response.status).toBe(401);
    })
})

describe('Index', () =>  {
    it('Should return status 200, if listing is successful', async() => {
        await factory.createMany('Passage',1)
        const response = await request(app).get('/passages').set('authorization', `Bearer ${await adminSession()}`)

        expect(response.status).toBe(200);
    })

    it('Should return status 401, if listing is not successful', async() => {
        const tok = 123456
        await factory.createMany('Passage',1)
        const response = await request(app).get('/passages').set('authorization', tok)

        expect(response.status).toBe(401);
    })
})