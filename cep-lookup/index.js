const express = require('express');


const app = express();

app.get('/ping', (_req, res) => {
  res.status(200).json({ menssage: "pong!"})
})

app.listen(3000, () => {
  console.log("Online")
});
