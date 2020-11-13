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
   return res.json({
      message: "Hello team"
   })
});

app.listen(3333, () =>{
   console.log("🚀 back-end server started!.");
});