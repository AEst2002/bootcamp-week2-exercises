const casual = require('casual')
const userData = require('./users')

casual.define('posts', ({userId}) => ({
    id: casual.uuid,
    text: casual.sentence,
    date_posted: casual.date(),
    likeCount: casual.integer(from = 0, to = 9),
    user_id: userId
}))

const postData = []

for (let i = 0; i < 10; i+=1) {
    const userId = casual.random_element(userData).id
    postData.push(casual.posts({ userId }))
}

console.log(postData)

module.exports = postData
