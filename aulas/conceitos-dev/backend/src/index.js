const express = require('express');

const app = express();

app.use(express.json());
/**
 * Métodos HTTP:
 * 
 * GET: Buscar informações do back-end
 * POST: CRiar uma informação no back
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 *  
 * Query Params: Filtros e paginação
 * Route Params: Identificar recursos (atualizar/deletar)
 * Request Body: Conteudo na hora de criar ou editar um recurso (JSON)
 */


const projects = [];

app.get('/projects', (req, res) => {
   //const {title, owner} = req.query;

   //console.log(title);
   //console.log(owner);

   return res.json(projects);
});

app.post('/projects', (req, res) => {
   const { title, owner } = req.body
   const body = req.body;
   projects.push({ body })
   return res.json(projects);

})

app.put('/projects/:id', (req, res) => {
   const { id } = req.params;

   console.log(id);

   return res.json([
      'Project 1',
      'project 2',
      'Project 3'
   ]);
})

app.delete('/projects/:id', (req, res) => {
   return res.json([
      'Project 1',
      'project 2',
   ])
})
app.listen(4444, () => {
   console.log("🚀 back-end server started on port 4444!.");
});