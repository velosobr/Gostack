const express = require('express');

const app = express();

app.get('/projects', (req, res) => {
   return res.json({
      message: "Hello team"
   })
});

app.listen(3333);