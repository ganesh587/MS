const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  userId: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Task', taskSchema);
