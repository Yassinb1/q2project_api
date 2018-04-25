const knex = require('../database.js');

const readAll = () => {
  return knex('todolist')
  .then( rows => rows )
  .catch( error => { console.error(error); })
};

const readOne = todoitem_id => {
  return knex('todolist').where('id', todoitem_id)
  .then ( rows => rows[0] )
  .catch ( error => { console.error(error); })
}

const create = ({priority, todoitem, completed}) => {
  return knex('todolist')
  .returning('*')
  .insert({priority, todoitem, completed})
  .then( row => row[0] )
  .catch( error => { console.error(error); })
}

const update = (todoitem_id, updates) => {
  return knex('todolist')
  .returning('*')
  .update({...updates, updated_at: new Date( Date.now()).toISOString() })
  .where('id', todoitem_id)
  .then ( row => row[0] )
  .catch( error => { console.error( error ); });
}

const destroy = todoitem_id => {
  return knex('todolist')
  .returning('*')
  .del()
  .where('id', todoitem_id)
  .then ( row => row[0] )
  .catch( error => { console.error( error ); })
}

module.exports = {
  readAll,
  readOne,
  create,
  update,
  destroy
}
