const express = require('express');
const router = express.Router();
const todolistController = require('../controllers/todolist');

router.get('/', todolistController.readAll);
router.get('/:todoitem_id', todolistController.readOne);
router.post('/', todolistController.create);
router.put('/:todoitem_id', todolistController.update);
router.delete('/:todoitem_id', todolistController.destroy);

module.exports = router;
