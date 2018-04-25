const todoitemModel = require('../models/todoitem');

const readAll = (request, response) => {
  todoitemModel.readAll()
  .then( result => {
    response.json( result );
  })
  .catch( error => { console.error ( error ); });
}

const readOne = (request, response) => {
  todoitemModel.readOne(request.params.todoitem_id)
  .then ( result => {
    response.json( result );
  })
  .catch( error => { console.error( error ); });
}

const create = (request, response) => {
  todoitemModel.create(request.body)
  .then( result => { response.json( result ); })
  .catch( error => { console.error ( error ); })
}

const update = (request, response) => {
  todoitemModel.update(request.params.todoitem_id, request.body)
  .then( result => { response.json( result ); })
  .catch( error => { console.error( error );  })
}

const destroy = (request, response) => {
  todoitemModel.destroy(request.params.todoitem_id)
  .then( result => { response.json(result); })
  .catch( error => { console.error ( error ); })
}

module.exports = {
  readAll,
  readOne,
  create,
  update,
  destroy
}
