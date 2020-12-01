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


describe('Create', () => {
    it('returns status 400 to failure', async() => {

        const user = await factory.attrs('Admin');
        await request(app).post('/admins').send(user);

        const traveler = await factory.attrs('Traveler');
        await request(app).post('/travelers').send(traveler);

        const trip = await factory.attrs('Trip',{
            user_id: 1
        });
        await request(app).post('/trips').send(trip);

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