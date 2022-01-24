const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./model/Author');
const Book = require('./model/Book');

const app = express();
app.use(bodyParser.json());

app.get('/', async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors)
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.findBook(id);
  if (book === null) return res.status(404).json({ menssage: 'livro não encontrado'}) 
  res.status(200).json(book)
})

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAll();

  res.status(200).json(books);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'id não encontrado' })
  res.status(200).json(author);
})

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  if (!Book.isValid(title, author_id)) return res.status(400).json({ message: 'Dados ínvalidos'});
  await Book.create(title, author_id);
  res.status(201).json({ message: 'Livro criado' });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Online na ${PORT}`);
})
