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

    it('Create new user and return status 200 to successful', async() => {

        const user = await factory.attrs('Admin');
        const response = await request(app).post('/admins').send(user);
    
        expect(response.status).toBe(200);
    })

    it('returns if the account is already registered', async() => {

        const user = await factory.create('Admin');
        const response = await request(app).post('/admins').send(user);

        const user1 = await factory.create('Admin');
        const response1 = await request(app).post('/admins').send(user1);
    
        expect(response1.status).toBe(500);
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
        expect(session.status).toBe(200);
    
    })
         
})


describe('index',() => {
    it('returns status 401', async() => {
        await factory.createMany('Admin',2);
        const response = await request(app)
            .get('/admins')
            .set('Authentication', `Bearer ${await adminSession()}`)
        expect(response.status).toBe(401);
    });

    it('returns status 200', async() => {
        await factory.createMany('Admin',2);
        const response = await request(app)
            .get('/admins/list')
        expect(response.status).toBe(200);
    });
});

describe('update', () => {
    it('returns status 400', async() => {
        await factory.attrs('Admin');
        const response = await request(app)
            .put('/admins/update')
        expect(response.status).toBe(400);

    })
})

describe('delete', () => {
    it('returns status 200 if delete', async() => {
        await factory.attrs('Admin');
        const response = await request(app)
            .delete('/admins/delete')
        expect(response.status).toBe(200);

    })
    
})