
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', (table) => {
      table.increments('id').primary()
      table.string('username')
      table.string('email')
      table.string('password')
    })
  ])
}

exports.down = function(knex, Promise) {
  knex.schema.dropTable('users')
}
