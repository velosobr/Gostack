import express from 'express';

const app = express();

app.get('/', (req, res) => {
 console.log('Acessou a rota');
 return res.json({ message: "Hello World" })
})

app.listen(3333);