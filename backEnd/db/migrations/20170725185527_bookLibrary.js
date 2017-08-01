
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('library', function(table) {
      table.increments('id').primary()
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')
      table.string('title')
      table.string('authors')
      table.string('publishedDate')
      table.string('publisher')
      table.string('averageRating')
      table.string('ratingsCount')
      table.string('selfLink')
      table.string('thumbnail')
    })
  ])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('library')
};
