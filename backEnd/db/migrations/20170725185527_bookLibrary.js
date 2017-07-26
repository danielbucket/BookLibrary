
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('library', function(table) {
      table.increments('id').primary()
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')
      table.string('authors')
      table.string('categories')
      table.string('description')
      table.string('industryIdentifiers')
      table.string('language')
      table.string('pageCount')
      table.string('publishedDate')
      table.string('publisher')
      table.string('subtitle')
      table.string('title')
    })
  ])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('library')
};
