const express = require('express');
const app = express();

app.get('/projects', (req, res) => {
 return res.json({ "title": 'Hello World' });
})
app.listen(3333);
