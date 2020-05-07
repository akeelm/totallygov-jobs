const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');


const jobsRouter = require('./server/routes/jobRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  process.env.MONGO_DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to db")
);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  () => console.log("connected to db")
});


// ROUTES
app.use('/api/jobs/', jobsRouter);

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

module.exports = app;
