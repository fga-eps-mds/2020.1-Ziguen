import request from 'supertest'
import app from '../../src/app'
import bcrypt from 'bcryptjs'
import truncate from '../util/truncate'
import factory from '../factores'
import { response } from 'express'


describe('User', () => {
    beforeEach(async() =>{
        await truncate();
    })
})


describe('Create', () => {

    it('Create new user and return status 200 to successful', async() => {
        const user = await factory.attrs('User');
        const response = await request(app).post('/users').send(user);

        expect(response.status).toBe(200);
    })

    it('must return validation failure', async() => {
        const user = await factory.attrs('User',{
            name:null,
            email: null, 
            telephone: null,
            password: null
        });
        const response = await request(app).post('/users').send(user);

        expect(response.status).toBe(400)
    })

    it('should return a message if the email is already registered', async() => {

        const user = await factory.attrs('User')

        await request(app)
        .post('/users')
        .send(user);

        const response = await request(app)
        .post('/users')
        .send(user)

        expect(response.status).toBe(400);
    })

    it('should encrypt user password when new user create', async() => {
        const user = await factory.create('User',{
            password: "123456",
        })
        const compareHash = await bcrypt.compare('123456', user.password_hash)
        expect(compareHash).toBe(true);

    })

})

