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

// Contact endpoints
app.get('/contacts', (req, res) => { res.send('Enviando todos os contatos') })
app.get('/contacts/:id', (req, res) => { res.send('Enviando um contato específico') })
app.post('/contacts', (req, res) => { res.send('Criando um contato') })
app.put('/contacts/:id', (req, res) => { res.send('Alterando um contato') })
app.delete('/contacts/:id', (req, res) => { res.send('Deletando um contato') })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})