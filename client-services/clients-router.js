const express = require('express');
const { readClients } = require('./data/clients');  
const router = express.Router();

router.get('/clients', (req, res) => {
    try {
        const clients = readClients();
        res.json(clients);
    } catch (error) {
        res.status(500).send('Error reading clientes data');
    }
});

module.exports = router;
