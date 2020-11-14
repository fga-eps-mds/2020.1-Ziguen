import request from 'supertest'
import app from '../../src/app'
import bcrypt from 'bcryptjs'
import truncate from '../util/truncate'
import factory from '../factores'


describe('Admin', () => {
    beforeEach(async() =>{
    await truncate();
    })
})


describe('Create', () => {
    it('Create new trip and return status 200 to sucessful', async() => {
        
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
        expect(response.status).toBe(400);
    })

    it('return 400 status if admin does not exist', async() => {
        
        const trip = await factory.attrs('Trip',{
            user_id: 99999
        });
        const response = await request(app).post('/trips').send(trip);
        expect(response.status).toBe(400);
    })
})