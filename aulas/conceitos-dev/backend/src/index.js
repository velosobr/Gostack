const express = require('express');

const app = express();
/**
 * Métodos HTTP:
 * 
 * GET: Buscar informações do back-end
 * POST: CRiar uma informação no back
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */
 
app.get('/projects', (req, res) => {
   return res.json([
      'Project 1',
      'project 2'
   ]);
});

app.post('/projects', (req, res) => {
   return res.json([
      'Project 1',
      'project 2'
   ]);
})

app.put('/projects/:id', (req, res) => {
   return res.json([
      'Project 1',
      'project 2'
   ]);
})
app.listen(3333, () =>{
   console.log("🚀 back-end server started!.");
});