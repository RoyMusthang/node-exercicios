const regex = /\d{5}-?\d{3}/;

function cepIsValid(cep) {
  return regex.test(cep);
}  
