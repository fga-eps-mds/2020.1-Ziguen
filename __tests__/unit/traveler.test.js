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

})