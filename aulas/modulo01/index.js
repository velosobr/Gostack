const express = require('express');

const server = express();

server.use(express.json());

const users = ['Lino', 'Cláudio', 'Karla'];
// query Params = ?teste=1
// Request body = {"name": Diego, "email": "lino.veloso@grad.ufsc.br"}

//CRUD - Create, Read, Update, Delete

server.get('/users', (req, res)=>{
  return res.json(users)
});
/*
server.get('/users', (req, res) =>{
  const name = req.query.name;

  return res.json({
    message: `Hello ${name}`,
    name: `Olá ${name}`,
    endereco: {
      rua: 'Jordelino João da Rosa',
      obs: 'apartamento'
    }
  })
});
*/
// Route Params = /users/1

server.get('/users/:index', (req, res) =>{
  const { index } = req.params;

  return res.json({
    'name': users[index]
  });
});

//Create

server.post('/users', (req,res) =>{
const { name } = req.body;

users.push(name);
return res.json(users)

})

//Update

server.put('/users/:index', (req,res) => {
const { index } = req.params;
const { name } = req.body;

users[index] = name;

return res.json(users)

})

//Delete

server.delete('/users/:index' , (req, res) =>{
  const { index } = req.params;
  users.splice(index, 1);

  return res.json(users)

})

server.listen(3333);