exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', messages => {
    messages.increments();
    messages.string('message').notNullable();
  });
};

exports.down = function(knex, Promise) {};
