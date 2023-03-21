const mongoose = require('mongoose');

/** Schema for Tasks model */
const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  description: {
    type: String,
  },
  completed: {
    default: false,
    type: Boolean,
  },
});

module.exports = mongoose.model('Tasks', dataSchema);
