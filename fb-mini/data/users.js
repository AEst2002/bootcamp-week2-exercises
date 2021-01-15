const { string } = require('casual')
const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  email: casual.email,
  password: casual.password,
  first_name: casual.first_name,
  last_name: casual.last_name,
  occupation: casual.word,
  bio: casual.sentence,
  dob: casual.date(),
  created_at: casual.moment,
  updated_at: casual.moment,
}))


const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

console.log(userData)

module.exports = userData
