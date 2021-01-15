const cleanup = require('../lib/cleanup')
const Pet = require('../models/Pet')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  const insertMe = await User.query().insert({
    email: 'email@email.com',
    firstName: 'Alex',
    lastName: 'Estevez',
    age: '18'
  }).returning('*')
  console.log(insertMe)

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const insertPet = await Pet.query().insert({
    ownerId: 'd75cb97d-1015-4bb7-8a18-4e7e96fbc249',
    type: 'DOG',
    name: 'Gizmo'
  }).returning('*')
  console.log(insertPet)
  
  // -----
  cleanup()
}

run()
