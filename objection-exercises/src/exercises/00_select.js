const cleanup = require('../lib/cleanup')
const Pet = require('../models/Pet')
// Import models
const User = require('../models/User')

const run = (async () => {
  // Write Queries and Logs Here !!!
  const allUsers = await User.query()
  console.log(allUsers)

  // Get all pets
  const allPets = await Pet.query()
  console.log(allPets)


  // Get the name and age of all users
  const userNameAge = await User.query().select('firstName', 'age')
  console.log(userNameAge)

  // ------
  cleanup()
})

run()
