const { getAll, save, update, remove } = require('./src/person');

module.exports.handler = async (context) => {
  //const apiKey = process.env.API_KEY
  const { method } = context.body
  
  switch (method) {
    case 'getAll':
      return await getAll();
    case 'save': 
      return await save(context.body);
    case 'update': 
      return await update(context.body);
    case 'remove': 
      return await remove(context.body);
    default:
      return await getAll();
  }
}
