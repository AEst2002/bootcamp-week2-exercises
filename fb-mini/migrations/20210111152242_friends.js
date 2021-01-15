exports.up = async knex => knex.schema.createTable('friends', table => {
    table
        .uuid('id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('uuid_generate_v4()'))

    table
        .uuid('requestor_id')
        .notNullable()
        .references('users.id')

    table
        .uuid('requested_id')
        .notNullable()
        .references('users.id')

    table
        .string('status')
        .notNullable()
})

exports.down = async knex => knex.schema.dropTableIfExists('friends')
