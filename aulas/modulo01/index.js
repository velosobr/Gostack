const express = require('express');

const server = express();

server.use(express.json());

const users = ['Lino', 'Cláudio', 'Karla'];
// query Params = ?teste=1
// Request body = {"name": Diego, "email": "lino.veloso@grad.ufsc.br"}

server.use((req, res, next) => {
  console.time('req')
  console.log(`Método: ${req.method}; URL: ${req.url}; Pathg: ${req.path}`);
  next();

  console.timeEnd('req');

})
/*
MIDLEWARE interno
*/
function checkUserExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "User name is required"
    })
  }
  return next();
}

function checkUserInArray(req, res, next) {
  if (!users[req.params.index]) {
    return res.status(400).json({
      error: "User does not exists"
    })
  }

  return next();

}
//CRUD - Create, Read, Update, Delete

server.get('/users', (req, res) => {
  return res.json(users)
});


// Route Params = /users/1

server.get('/users/:index', checkUserInArray, (req, res) => {
  const { index } = req.params;

  return res.json({
    'name': users[index]
  });
});

//Create
server.post('/users', checkUserExists, (req, res) => {
  const { name } = req.body;

  users.push(name);
  
  return res.json(users)

})

//Update

server.put('/users/:index', checkUserExists, checkUserInArray, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users)

})

//Delete

server.delete('/users/:index', checkUserInArray, (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);

  return res.json(users)

})

server.listen(3333);