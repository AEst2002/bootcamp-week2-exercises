const casual = require('casual')
const userData = require('./users')

casual.define('friends', ({user1Id, user2Id}) => ({
    id: casual.uuid,
    requested_id: user2Id,
    requestor_id: user1Id,
    status: casual.random_element(['accepted', 'denied', 'pending'])
}))

const friends = []

for (let i = 0; i < 10; i+=1) {
    const user1Id = casual.random_element(userData).id
    const user2Id = casual.random_element(userData).id
    friends.push(casual.friends({ user1Id, user2Id }))
}

console.log(friends)

module.exports = friends