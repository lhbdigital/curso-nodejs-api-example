const mysql = require('mysql')

const CONNECTION_DATA = {
  HOST: "INSERT HOST HERE",     
  PORT: '3306',
  USER: 'INSERT USER HERE',
  PASSWORD: 'INSERT PASSWORD HERE',
  DATABASE: 'cursonode'
}

const executeQuery = async (query) => {
  const connection = mysql.createConnection(CONNECTION_DATA)

  return new Promise((resolve, reject) => {
    connection.query(query, (err, results) => {
      connection.end()
  
      if(err) {
        reject(err)
      } else {
        resolve(JSON.parse(JSON.stringify(results)))
      }
    })
  });
}

module.exports = executeQuery