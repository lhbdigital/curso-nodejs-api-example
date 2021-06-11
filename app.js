const express = require('express')
const app = express()
const port = 3000

// Hello World
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Served on root
app.use(express.static('public'))

// Served on /static
app.use('/static', express.static('public'))

// Contact module
const contacts = require('./routes/contacts')
app.use('/contacts', contacts)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})