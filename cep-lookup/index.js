require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT;
const app = express();

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: "pong!"})
})

app.get('/cep/:cep', (req, res) => {

})

app.listen(PORT, () => {
  console.log("Online")
});
