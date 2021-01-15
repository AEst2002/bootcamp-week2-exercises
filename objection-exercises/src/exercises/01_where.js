const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const nameMohammed = await User.query().where('firstName', 'Mohammed')
  console.log(nameMohammed)

  // Do the same with object notation
  const nameMohammed2 = await User.query().where({firstName: 'Mohammed'})
  console.log(nameMohammed2)

  // Get all DOGS and BIRDS
  const dogsAndBirds = await Pet.query().whereIn('type', ['DOG', 'BIRD'])
  console.log(dogsAndBirds)

  // -----
  cleanup()
}

run()
