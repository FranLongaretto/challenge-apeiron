const Task = require('../models/Tasks');

const getTasks = async () => {
  const tasksDB = await Task.find({});
  return tasksDB.map((task) => task.toJSON());
};

module.exports = {
  getTasks,
};
