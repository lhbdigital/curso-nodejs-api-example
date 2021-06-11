const express = require('express')
const router = express()

router.get('/', (req, res) => { res.send('Enviando todos os contatos') })
router.get('/:id', (req, res) => { res.send('Enviando um contato específico') })
router.post('/', (req, res) => { res.send('Criando um contato') })
router.put('/:id', (req, res) => { res.send('Alterando um contato') })
router.delete('/:id', (req, res) => { res.send('Deletando um contato') })

module.exports = router;