exports.up = async knex => knex.schema.createTable('comments', table => {
    table
        .uuid('id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('uuid_generate_v4()'))

    table
        .uuid('user_id')
        .references('users.id')
        .notNullable()

    table
        .uuid('post_id')
        .references('posts.id')
        .notNullable()

    table
        .string('text')
        .notNullable()
})

exports.down = async knex => knex.schema.dropTableIfExists('comments')
