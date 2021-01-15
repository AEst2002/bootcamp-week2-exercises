const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const ford = await User.query().findById("22b3caf8-3523-48e9-bfa2-457241735495")

  // Use that instance to create a new pet related that user
  const fordNewPet = await ford.$relatedQuery('pets').insert({name: "Scoob", type: "DOG"}).returning('*')
  console.log(fordNewPet)

  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph

  const fordInfo = await ford.$fetchGraph('[pets, children]')
  console.log(fordInfo)

  // -----
  cleanup()
}

run()
