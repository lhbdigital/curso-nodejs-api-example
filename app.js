const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Served on root
app.use(express.static('public'))

// Served on /static
app.use('/static', express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})