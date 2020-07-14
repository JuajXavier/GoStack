const express = require('express');

const app = express();

app.use(express.json());

const users = []

app.get('/users', (req, res) => {
  console.log(users)
  return res.json(users)
});

app.post('/users', (req, res) => {
  const {name, crp} = req.body;
  
  const user = {name, crp};

  users.push(user);

  res.json(user)
});

app.listen(3333, () => {
  console.log('✔ Back-end started! ✔')
});