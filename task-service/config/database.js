const mongoose = require('mongoose');

mongoose.connect("mongodb://mongo:27017/tasks")
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});
