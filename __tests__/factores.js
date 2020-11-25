import faker from 'faker'
import { factory} from 'factory-girl'

import Admin from '../src/app/models/Admin';
import Trip from '../src/app/models/Trip';
import Boat from '../src/app/models/Boat';

import Traveler from '../src/app/models/Traveler';

 factory.define('Admin', Admin, {
    cpf: faker.random.number,
    name: faker.name.findName,
    email: faker.internet.email, 
    telephone: faker.random.number,
    password: faker.internet.password
 })
 factory.define('Trip',Trip, {
    origin: faker.name.findName,
    destiny: faker.name.findName,
    hour: faker.random.number,
    date: faker.random.number,
 })
 factory.define('Traveler', Traveler, {
    name: faker.name.findName,
    cpf: faker.random.number,
    email: faker.internet.email,
    telephone: faker.random.number,
    password: faker.internet.password,
 })
  factory.define('Boat', Boat, {
    name: faker.name.findName,
    capacity: faker.random.number,
    user_id: faker.random.number

  })


 export default factory;

