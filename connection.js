const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'url.public.com',
  database: 'postgres',
  password: '12345',
  port: 5432,
  ssl: true
})

module.exports.query = (query, params) => {
  return new Promise((resolve, reject) => {
    client.connect()
    client.query(query, params, (err, res) => {
      if(err)
        reject(err)
      else
        resolve(res);
      client.end()
    })
  })
}