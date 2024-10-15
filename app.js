const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const publicationRoutes = require('./routes/publicationRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
app.use('/publication', publicationRoutes);

// start server
app.listen(3000, () => {
  console.log('Server run at port 3000');
});