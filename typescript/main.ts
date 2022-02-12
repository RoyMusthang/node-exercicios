import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send('N.A')
})

app.listen(3333, () => console.log('rodando na porta 3333'));
