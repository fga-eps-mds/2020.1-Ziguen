import request from 'supertest'
import app from '../../src/app'
import bcrypt from 'bcryptjs'
import truncate from '../util/truncate'
import factory from '../factores'



describe('User', () => {
    beforeEach(async() =>{
        await truncate();
    })
})

async function userSession() {
    const user = (await factory.create('User')).dataValues;

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

describe('index',() => {

    it('returns a list of all registered users', async() => {

      console.log(await factory.createMany('User', 5));

        const teste = await userSession();
        console.log(teste);
    
        const response = await request(app)
            .get('/users')
            .set('Authentication', `Bearer ${await userSession()}`)
            
     
       expect(response.status).toBe(200);
    }, 50000)

    

});


 

