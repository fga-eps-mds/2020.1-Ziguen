import request from 'supertest'
import app from '../../src/app'
import bcrypt from 'bcryptjs'
import truncate from '../util/truncate'
import factory from '../factores'


describe('Boat', () => {
    beforeEach(async() =>{
    await truncate();
    })
})

describe('Create', () => {
    it('return status 200 to successful', async() => {

        const admin = await factory.attrs('Admin');
        await request(app).post('/admins').send(admin);

        const boat = await factory.attrs('Boat',{
            user_id: 1
        });

        const response = await request(app).post('/boats').send(boat);

        expect(response.status).toBe(200);
    })
})
