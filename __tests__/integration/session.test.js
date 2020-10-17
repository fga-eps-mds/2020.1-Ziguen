import request from 'supertest'
import app from '../../src/app'

describe('User', () => {
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

})