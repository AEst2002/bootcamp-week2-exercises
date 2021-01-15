const comments = require('../data/comments')

exports.seed = knex => knex('comments').del()
  .then(() => knex('comments').insert(comments))