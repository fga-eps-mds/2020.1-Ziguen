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
    const admin = (await factory.create('Admin')).dataValues;

    const session = await request(app)
      .post('/sessions')
      .send({
        email: admin.email,
        password: admin.password,
      });


    return session.body.token;
}


describe('Create', () => {

    it('Create new admin and return status 200 to successful', async() => {
        const admin = await factory.attrs('Admin');
        const response = await request(app).post('/admins').send(admin);

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

})

/* describe('index',() => {

    it('returns a list of all registered admins', async() => {
        await factory.createMany('Admin',5);

        const response = await request(app)
            .get('/admins/list')
            .set('Authentication', `Bearer ${await adminSession()}`)

        expect(response.status).toBe(200);
    });

});

 */
 

