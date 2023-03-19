const { validationResult } = require('express-validator');
const ModelTasks = require('../models/model');

/** Controller for POST method */
const addTask = async (req, res, next) => {
  const task = new ModelTasks({
    name: req.body.name,
    description: req.body.description,
  });

  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const taskToSave = await task.save();
    res.status(200).json(taskToSave);
  } catch (error) {
    next(error);
  }
};

/** Controller for GET method --> Get ALL Tasks */
const getAllTasks = async (req, res) => {
  try {
    const tasksList = await ModelTasks.find();
    res.json(tasksList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/** Controller for GET method --> Get Tasks by ID */
const getTaskByID = async (req, res) => {
  try {
    const data = await ModelTasks.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/** Controller for PATCH method --> Update Task by ID */
const updateTaskByID = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { id } = req.params;
    const updatedData = req.body;
    const options = { new: true };

    const result = await ModelTasks.findByIdAndUpdate(id, updatedData, options);

    res.json(result);
  } catch (error) {
    next(error);
  }
};

/** Controller for DELETED method --> Delete Task by ID */
const deleteTaskByID = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await ModelTasks.findByIdAndDelete(id);

    res.send(`Task: "${data.name}" --> DELETE`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/** Export all controllers */
module.exports = {
  addTask,
  getAllTasks,
  getTaskByID,
  updateTaskByID,
  deleteTaskByID,
};
