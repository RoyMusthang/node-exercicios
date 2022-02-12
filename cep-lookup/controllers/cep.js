const Connection = require("mysql2/typings/mysql/lib/Connection");

const regex = /\d{5}-?\d{3}/;

function cepIsValid(cep) {
  if (regex.test(cep)) return cep
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2'); 
}

function getNewCep({ cep, logradouro, bairro, localidade, uf}) {
  const value = {
    cep: cepIsValid(cep),
    logradouro,
    bairro,
    localidade,
    uf,
  }
  return value;
}

async function findAddressByCep(cepToSearch) {
  const query = 'SELECT * FROM cep_lookup WHERE cep = ?';
  const treatedCep = cepToSearch.replace('-', '');
  const result = await connection.execute(query, [treatedCep])
    .then(([results]) => results.length ? results[0] : null));
  if (!result) return null;
  return getNewCep(result);
};

module.exports = {
  findAddressByCep,
};
