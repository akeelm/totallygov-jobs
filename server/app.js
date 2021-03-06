const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const jobsRouter = require('./routes/jobRoutes');
require('dotenv/config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  process.env.MONGO_DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// ROUTES
app.use('/api/jobs/', jobsRouter);

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

module.exports = app;
