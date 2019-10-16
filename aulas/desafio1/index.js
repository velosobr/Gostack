const express = require('express');

const server = express();

server.use(express.json())

const projects = [
  {
    id: "1",
    title: "Projeto Bootcamp",
    tasks: ["fazer o desafio", "jantar"]
  }, {
    id: "2",
    title: "Projeto yoda",
    tasks: ["fazer o front", "atender chamados"]
  },
  {
    id: "3",
    title: "Projeto jantar",
    tasks: []
  }]


  function checkProjectExists(req, res, next) {
    const { id } = req.params;
    const project = projects.find(p => p.id ==id)

    if(!project){
      return res.status(400).json({error: 'Project not found'});
    }
    return next();
  }
//ROTAS

//POST
server.post('/projects', (req, res) => {
  const { id, title, tasks } = req.body;

  projects.push({ id, title, tasks })

  return res.json(projects)
})

//GET

server.get('/projects', (req, res) => {
  return res.json(projects);
})

//PUT
server.put('/projects/:id', (req, res) =>{
const { id } = req.params;
const { title } = req.body;

const project = projects.find(p => p.id == id);

project.title = title;

return res.json(project);

})

//DELETE
server.delete('/projects/:id', checkProjectExists,(req,res) => {
  const {id} = req.params;
  const projectIndex = projects.findIndex(p => p.id == id);

  projects.splice(project, 1);
  return res.json(projects);

  
})

//post com id

server.post('/projects/:id', (req, res) => {
  const { id } = req.params;
  const {title} = req.body;

  const project = projects.find(p => p.id == id)

  project.tasks.push(title);

  return res.json(projects)
})

server.listen(3000);