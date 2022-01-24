const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books;');

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

async function getByAuthorId(authorId) {
  const [books] = await connection.execute('SELECT * FROM model_example.books WHERE author_id=?;', [authorId]);
  return books.map(({ id, title, author_Id}) => ({
    id,
    title,
    authorId: author_Id,
  }));
}

async function findBook(bookId) {
  const [books] = await connection.execute('SELECT * FROM model_example.books WHERE id=?;', [bookId]);
  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
}

async function isValid(title, author_id) {
  if (title < 3) return false;
  if (!title) return false;
  if (!author_id) return false;
  const authorContent = await getByAuthorId(author_id);
  if (!authorContent) return false
}

async function create(title, author_id) {
  const white = await connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUE (?, ?)'
  ,[title, author_id]);
  return white;
}

module.exports = {
  getAll,
  getByAuthorId,
  findBook,
  isValid,
  create,
};
