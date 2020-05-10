const app = require('./app');
const express = require('express');
const path = require('path');

require('dotenv/config');

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './../client/build')));

  app.get('*', function(req, res) {
    console.log(path.join(__dirname, './../client/build', 'index.html'));
    res.sendFile(path.join(__dirname, './../client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
