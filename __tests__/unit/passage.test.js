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

describe('Create', () => {
    it('returns status 400 to failure', async() => {

        const user = await factory.attrs('Passage');
        const response = await request(app).post('/passages').send(user);
    
        expect(response.status).toBe(400);
    })
})