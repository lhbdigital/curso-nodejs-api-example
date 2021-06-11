
const express = require('express')
const axios = require('axios')
const router = express()

router.get('/', async (req, res) => {
    const zipCode = req.query.zipCode

    if(!zipCode) {
        res.status(400).send('Missing zip code')
    } else {
        axios.get(`http://viacep.com.br/ws/${zipCode}/json`).then(response => {
            const data = {
                cep: response.data.cep,
                logradouro: response.data.logradouro,
                complemento: response.data.complemento,
                bairro: response.data.bairro,
                localidade: response.data.localidade,
                uf: response.data.uf 
            }

            res.send(data)
        }).catch(err => {
            console.error(err)
            res.status(500).send(`Unknown error`)
        })
    }
})

module.exports = router;

