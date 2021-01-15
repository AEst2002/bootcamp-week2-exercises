const casual = require('casual')
const userData = require('./users')
const postData = require('./posts')

casual.define('likes', ({userId, postId}) => ({
    id: casual.uuid,
    user_id: userId,
    post_id: postId,
}))

const likes = []

for (let i = 0; i < 10; i+=1) {
    const userId = casual.random_element(userData).id
    const postId = casual.random_element(postData).id
    likes.push(casual.likes({ userId, postId }))
}

console.log(likes)

module.exports = likes