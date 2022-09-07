'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.post('/person', (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  const gender = req.query.gender;
  const newAge = parseInt(age) + 5;
  res.status(200).send(`${newAge}`);
});

function start(port) {
  app.listen(port || 3005, () => console.log(`server up a wake ^_^ on ${port}`));
}

module.exports = {
  app: app, // export app for the testing file
  start: start
};

// app.listen(3000, () => console.log(`server up a wake`));
