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
    const user = await factory.attrs('User');
    const response = await request(app).post('/users').send(user);
    
    expect(response.status).toBe(200);
    })
})