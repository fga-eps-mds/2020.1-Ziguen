import faker from 'faker'
import { factory} from 'factory-girl'

import User from '../src/app/models/User'

 factory.define('User', User, {
    id: faker.random.number, 
    name: faker.name.findName,
    email: faker.internet.email, 
    telephone: faker.random.number,
    password: faker.internet.password
 })

 export default factory;

 // Gerar dados aleatorios