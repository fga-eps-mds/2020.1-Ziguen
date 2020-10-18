import request from 'supertest'
import app from '../../src/app'
import truncate from '../util/truncate'

describe('User', () => {

    beforeEach(async() => {
        await truncate();
    })

    it('shold be able to register', async() => {
        const response = await request(app)
            .post('/users')
            .send({
                id: "1",
	            name: "admin",
	            email: "admin@gmail.com",
	            telephone: "3254124",
	            password: "123456"
            })

        expect(response.body).toHaveProperty('id')
    })
    
    it('shold not be able to resgister with duplicated email', async () => {

        await request(app)
        .post('/users')
        .send({
            id: "1",
	        name: "admin",
	        email: "admin@gmail.com",
	        telephone: "3254124",
	        password: "123456"
        });

        const response = await request(app)
        .post('/users')
        .send({
            id: "1",
	        name: "admin",
	        email: "admin@gmail.com",
	        telephone: "3254124",
	        password: "123456"
        })

        expect(response.status).toBe(400);

    })


})