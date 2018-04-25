const express = require('express');
const router = express.Router();
const blogpostController = require('../controllers/todolist');

router.get('/', todolistController.readAll);
router.get('/:todolist_id', todolistController.readOne);
router.post('/', todolistController.create);
router.put('/:todolist_id', todolistController.update);
router.delete('/:todolist_id', todolistController.destroy);

module.exports = router;
