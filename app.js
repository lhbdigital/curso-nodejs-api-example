const express = require('express')
const app = express()
const port = 3001

app.use(express.json())

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

const address = require('./routes/address')
app.use('/address', address)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})