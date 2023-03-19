const express = require('express');
const TaskController = require('../controllers/controller');
const { taskValidate, updateTaskValidate } = require('../validations/validations');

const router = express.Router();
module.exports = router;

/** Add new task */
router.post('/tasks', taskValidate, TaskController.addTask);

/** Get all tasks */
router.get('/tasks', TaskController.getAllTasks);

/** Get task by ID */
router.get('/tasks/:id', TaskController.getTaskByID);

/** Update task by ID */
router.patch('/tasks/:id', updateTaskValidate, TaskController.updateTaskByID);

/** Delete task by ID */
router.delete('/tasks/:id', TaskController.deleteTaskByID);
