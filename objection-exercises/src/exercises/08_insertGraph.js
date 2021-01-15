const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!
  
  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  const mrBynum = await User.query().insertGraph({
    firstName: "Peter",
    lastName: "Bynum",
    email: "bynum@coolguy.com",
    pets: [
      {
        name: "Rocco",
        type: "DOG",
      },
      {
        name: "Rosey",
        type: "DOG"
      }
    ]
  }).returning('*')

  console.log(mrBynum)

  // -----
  cleanup()
}

run()
