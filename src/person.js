const { query } = require('../connection');

const isRequired = (name) => { throw new Error(`${name} is required`) };

module.exports.getAll = async () => {
  const response = await query('SELECT * from user');
  return response.rows;
}

module.exports.save = async ({ 
  name = isRequired('name'), 
  lastname = isRequired('lastname'), 
  phone = isRequired('phone')
}) => {
  const response = await query('INSERT INTO user (name, lastname, phone) VALUES ($1, $2, $3)', [name, lastname, phone]);
  return response;
}

module.exports.update = async ({ 
  id = isRequired('id'),
  name = isRequired('name'), 
  lastname = isRequired('lastname'), 
  phone = isRequired('phone')
}) => {
  const response = await query('UPDATE user SET name = $2, lastname = $3, phone = $4 WHERE id = $1', [id, name, lastname, phone]);
  return response;
}

module.exports.remove = async ({ id = isRequired('id')}) => {
  const response = await query('DELETE FROM WHERE id = $1', [id]);
  return response;
}