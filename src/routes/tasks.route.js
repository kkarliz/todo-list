const express = require('express');
const router = express.Router();
const taskController = require('../controllers/tasks.controller');

router.get('/', taskController.getAllTask);
router.get('/:id', taskController.getTaskById);
router.post('/', taskController.createTask);
router.patch('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
