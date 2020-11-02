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

    it('Create new user and return status 200 to successful', async() => {

        const user = await factory.attrs('Admin');
        const response = await request(app).post('/admins').send(user);
    
        expect(response.status).toBe(200);
    })
    it('must return validation failure', async() => {
        
        const admin = await factory.attrs('Admin',{
            name:null,
            email: null, 
            telephone: null,
            password: null
        });
        const response = await request(app).post('/admins').send(admin);
        
        expect(response.status).toBe(500)
        })
})