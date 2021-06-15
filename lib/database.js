const mysql = require('mysql')

const CONNECTION_DATA = {
  HOST: "INSERT HOST HERE",     
  PORT: '3306',
  USER: 'INSERT USER HERE',
  PASSWORD: 'INSERT PASSWORD HERE',
  DATABASE: 'cursonode'
}

const executeQuery = (query) => {
  const connection = mysql.createConnection(CONNECTION_DATA)

  connection.query(query, (err, results) => {
    connection.end()

    if(err) {
      throw err
    } else {
      return results
    }
  })
}

module.exports = executeQuery