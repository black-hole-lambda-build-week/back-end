exports.up = function(knex) {
  return knex.schema.createTable('message', function(tbl) {
    tbl.increments();
    tbl.string('message').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('message');
};
