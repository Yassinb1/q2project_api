exports.up = function(knex, Promise) {
  return knex.schema.createTable('todolist', table => {
    table.increments();
    table.string('todoitem');
    table.integer('priority');
    table.boolean('completed')
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todolist')
};
