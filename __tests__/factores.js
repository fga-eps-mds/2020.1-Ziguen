import faker from 'faker'
import { factory} from 'factory-girl'

import Admin from '../src/app/models/Admin';

 factory.define('Admin', Admin, {
    cpf: faker.random.number,
    name: faker.name.findName,
    email: faker.internet.email, 
    telephone: faker.random.number,
    password: faker.internet.password
 })

 export default factory;

