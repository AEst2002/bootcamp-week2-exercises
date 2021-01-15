exports.up = async knex => knex.schema.createTable('posts', table => {
    table  
        .uuid('id')
        .primary()
        .notNullable()
        .defaultTo(knex.raw('uuid_generate_v4()'))

    table
        .string('text')
        .notNullable()

    table
        .string('date_posted')
        .notNullable()

    table
        .integer('likeCount')
    
    table
        .uuid('user_id')
        .references('users.id')
        .notNullable()
})

exports.down = async knex => knex.schema.dropTableIfExists('posts')
