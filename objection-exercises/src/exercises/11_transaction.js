const cleanup = require('../lib/cleanup')
const Pet = require('../models/Pet')
const User = require('../models/User')
// Import models

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */

   const newGal = await User.transaction(async trx => {
     const tiana = await User.query(trx).insert({ email: "tiana@email.com", firstName: "Tiana", lastName: "Rivera", age: "18"}).returning('*')
     const squeeb = await tiana.$relatedQuery('pets', trx).insert({ name: "Squeeb", type: "CAT"})
     // throw new Error("This is an error")
     const totalPets = await Pet.query(trx).resultSize()

      if(totalPets > 15) {
        const noBirds = await Pet.query(trx).delete().where({type: "BIRD"})
      }

      console.log(tiana)
   })



  // -----
  cleanup()
}

run()
