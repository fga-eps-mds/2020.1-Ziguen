import request from 'supertest'
import app from '../../src/app'
import bcrypt from 'bcryptjs'
import truncate from '../util/truncate'
import factory from '../factores'


describe('Session', () => {
 beforeEach(async () => {
     await truncate();
 })
});



it('returns a token if the user is authenticated', async () => {
    const user = (await factory.create('User')).dataValues;

    const session = await request(app)
    .post('/sessions')
    .send({
        email: user.email,
        password: user.password
    })
    expect(session.body).toHaveProperty('token');
    expect(session.status).toBe(200);

})

