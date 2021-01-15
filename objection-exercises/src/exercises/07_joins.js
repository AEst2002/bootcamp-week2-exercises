const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const userAndPet = await User.query().withGraphFetched('pets')
  console.dir(userAndPet, { depth: null })

  // Get all users, their pets, AND their children
  const userInfo = await User.query().withGraphFetched('[pets, children]')
  console.dir(userInfo, { depth: null })

  // Get all users, their parents, and their grandparents
  const userFamily = await User.query().withGraphFetched('[parents.parents, parents]')
  console.dir(userFamily, { depth: null })

  // Get all users, their pets, their chilren, and their childrens' pets
  const familyPets = await User.query().withGraphFetched('[pets, children, children.pets]')

  // -----
  cleanup()
}

run()
