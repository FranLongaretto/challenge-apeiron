const express = require('express');
const {
  addTask,
  getAllTasks,
  getTaskByID,
  updateTaskByID,
  deleteTaskByID,
} = require('../controllers/tasksController');
const {
  taskValidate,
  updateTaskValidate,
} = require('../validations/tasksValidations');

const router = express.Router();
module.exports = router;

/** Add new task */
router.post('/tasks', taskValidate, addTask);

/** Get all tasks */
router.get('/tasks', getAllTasks);

/** Get task by ID */
router.get('/tasks/:id', getTaskByID);

/** Update task by ID */
router.patch('/tasks/:id', updateTaskValidate, updateTaskByID);

/** Delete task by ID */
router.delete('/tasks/:id', deleteTaskByID);
