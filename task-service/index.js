const express = require('express');
require('./config/database');
const bodyParser = require('body-parser');

const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/tasks', taskRoutes);

app.listen(3001, () => {
  console.log(`Server is running on http://localhost:3001`);
});
app.get('/', (req, res) => {
  res.send('Hello World!');
});