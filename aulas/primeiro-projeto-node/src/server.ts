import express from 'express';

const app = express();

app.get('/', (req, res) => {
   return res.json({ message: 'Hello  World' });
})

app.listen(3334, () => {
   console.log("🚀 server is listening on port 3334");

})