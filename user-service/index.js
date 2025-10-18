const express = require('express');
require('./config/database');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
app.get('/', (req, res) => {
  res.send('Hello World!');
});