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

    it('should return a message if the email is already registered', async() => {

        const admin = await factory.attrs('Admin')
        
        await request(app)
        .post('/admins')
        .send(admin);
        
        const response = await request(app)
        .post('/admins')
        .send(admin)
        
        expect(response.status).toBe(400);
    })

    it('should encrypt admin password when new admin create', async() => {

        const admin = await factory.create('Admin',{
            password: "123456",
        })
        const compareHash = await bcrypt.compare('123456', admin.password_hash)
        expect(compareHash).toBe(true);
        
    })

    it('returns a token if the user is authenticated', async () => {
        const adm = (await factory.create('Admin')).dataValues;
    
        const session = await request(app)
        .post('/sessions')
        .send({
            email: adm.email,
            password: adm.password
        })
        expect(session.body).toHaveProperty('token');
        expect(session.status).toBe(200);
    
    })
        
        
})