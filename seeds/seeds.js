
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {task: 1, colName: 'I need to clean my laundry'},
        {date: 2, colName: 'January 2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
