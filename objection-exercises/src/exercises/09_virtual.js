const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const ageCheck = await User.query().first()
  console.log([ageCheck.fullName(), ageCheck.overTwenty()])

  // -----
  cleanup()
}
run()
