const express = require('express');
const server = express();
// Query params = ?teste=1
// Route params = /users/1
// Request body = {"name": "Lino", "email", "lino.veloso@grad.ufsc.br"}
//local

server.get('/users', (req, res) => {
  const nome = req.query.nome;
  const email = req.query.email;
  return res.json({
    Nome: `Hello ${nome}`,
    email: `seu email é: ${email}`
  });
})

server.get('/users/:id', (req, res) => {
  const id = req.params.id;
  return res.json({
    message: `Buscando dados do usuário ${id}`
  })
})
server.listen(3333);