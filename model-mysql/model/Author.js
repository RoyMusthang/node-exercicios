 const connection = require('./connection');
 
 const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
   const fullName = [firstName, middleName, lastName]
     .filter(Boolean)
     .join(' ');
   return {
     id,
     firstName,
     middleName,
     lastName,
     fullName,
   }
 }

 const serialize = (authorData) => ({
   id: authorData.id,
   firstName: authorData.first_name,
   middleName: authorData.middle_name,
   lastName: authorData.last_name,
 })

 async function getAll() {
   const [authors] = await connection.execute(
     'SELECT id, first_name, middle_name, last_name FROM model_example.authors;'
   );
   return authors.map(serialize).map(getNewAuthor);
 };
 
 async function findById(id) {
  const [ authorData ] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id=?;', [id]);
  if (authorData === null) return null;
  const { firstName, middleName, lastName } = authorData.map(serialize)[0];
  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  });
 }

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

   return true;
};

const create = async (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
  [firstName, middleName, lastName],
);

 module.exports = {
   getAll,
   findById,
   isValid,
   create,
 };
