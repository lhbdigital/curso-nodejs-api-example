const express = require('express')
const router = express()

const executeQuery = require('../lib/database')

router.get('/', async (req, res) => {
  try {
    console.log('Getting contacts');
    const contacts = await executeQuery(`SELECT * FROM contacts;`)
    res.send(contacts) 
  } catch (err) {
    console.error(err);
    res.status(500).send('Error getting contacts')
  }
})


router.get('/:id', async (req, res) => {
  const { id } = req.params
  const intId = parseInt(id)
  
  if(!id || isNaN(intId)) {
    res.status(400).send('Missing os incorrect id')
  } else { 
    try {
      console.log(`Getting contact with id=${intId}`);
      const contacts = await executeQuery(`SELECT * FROM contacts WHERE id=${intId};`)
      res.send(contacts) 
    } catch (err) {
      console.error(err);
      res.status(500).send(`Error getting contact with id=${intId}`)
    }
  }
})


router.post('/', async (req, res) => {
  const { name, phone, description } = req.body

  try {
    console.log(`Creating contact`);
    
    await executeQuery(
      `INSERT INTO contacts (name,phone,description)` +
      `VALUES ('${name || ''}','${phone || ''}','${description || ''}');`
    )
    res.send() 
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error creating contact`)
  }
})


router.put('/:id', async (req, res) => {
  const { id } = req.params
  const intId = parseInt(id)

  const { name, phone, description } = req.body
  
  if(!id || isNaN(intId)) {
    res.status(400).send('Missing os incorrect id')
  } else { 
    try {
      console.log(`Updating contact with id=${intId}`);

      await executeQuery(
        `UPDATE contacts SET name='${name || ''}', phone='${phone || ''}', ` +
        `description='${description || ''}' WHERE id=${intId};`
      )
      res.send() 
    } catch (err) {
      console.error(err);
      res.status(500).send(`Error updating contact with id=${intId}`)
    }
  }
})


router.delete('/:id', async (req, res) => { 
  const { id } = req.params
  const intId = parseInt(id)
  
  if(!id || isNaN(intId)) {
    res.status(400).send('Missing os incorrect id')
  } else { 
    try {
      console.log(`Deleting contact with id=${intId}`);
      await executeQuery(`DELETE FROM contacts WHERE id=${intId};`)
      res.send(contacts) 
    } catch (err) {
      console.error(err);
      res.status(500).send(`Error deleting contact with id=${intId}`)
    }
  }
})

module.exports = router;