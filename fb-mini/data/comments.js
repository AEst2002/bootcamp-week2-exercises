const casual = require('casual')
const userData = require('./users')
const postData = require('./posts')

casual.define('comments', ({userId, postId}) => ({
    id: casual.uuid,
    user_id: userId,
    post_id: postId,
    text: casual.sentence
}))

const comments = []

for (let i = 0; i < 10; i+=1) {
    const userId = casual.random_element(userData).id
    const postId = casual.random_element(postData).id
    comments.push(casual.comments({ userId, postId }))
}

console.log(comments)

module.exports = comments
