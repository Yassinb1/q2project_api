exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todolist').del()
    .then(function () {
      // Inserts seed entries
      return knex('todolist').insert([
        { todoitem: "I need to walk my dog!", priority: 3, completed: false },
        { todoitem: "I need to do my laundry..", priority: 2, completed: false},
        { todoitem: "I need to buy a birthday present..", priority: 1, completed: false}

      ]);
    });
};
