const knex = require('../db');

const readAll = () => {
  return knex('todoitems')
  .then( rows => rows )
  .catch( error => { console.error(error); };)
};

const readOne = todoitem_id => {
  return knex('todoitems').where('id', todoitem_id)
  .then ( rows => rows[0] )
  .catch ( error => { console.error(error); })
}

const create = ({title, content}) => {
  return knex('todoitems')
  .returning('*')
  .insert({ title, content })
  .then( row => row[0] )
  .catch( error => { console.error(error); })
}

const update = (todoitem_id, updates) => {
  return knex('todoitems')
  .returning('*')
  .update({...updates, updated_at: new Date( Date.now()).toISOString() })
  .where('id', todoitem_id)
  .then ( row => row[0] )
  .catch( error => { console.error( error ); });
}

const destroy = todoitem_id => {
  return knex('todoitems')
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
