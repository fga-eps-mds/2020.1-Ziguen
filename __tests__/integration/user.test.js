import request from 'supertest'
import app from '../../src/app'
import bcrypt from 'bcryptjs'
import truncate from '../util/truncate'
import User from '../../src/app/models/User'

describe('User', () => {

    beforeEach(async() => {
        await truncate();
    })

    it('should encrypt user password when new user create', async() => {
        const user = await User.create({
            id: "1",
            name: "admin",
            email: "admin@gmail.com", 
            telephone: "3254124",
            password: "123456"
        })
        
        const compareHash = await bcrypt.compare('123456', user.password_hash)

        expect(compareHash).toBe(true);

    })

    it('should be able to register', async() => {
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
    
    it('should not be able to resgister with duplicated email', async () => {

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