exports.up = function(knex) {
  return knex.schema.createTable('messages', function(tbl) {
    tbl.increments();
    tbl.string('message').notNullable();

    tbl
      .integer('user_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users');

    tbl.string('expirationDate');

    tbl.integer('numberOfDays');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('messages');
};
