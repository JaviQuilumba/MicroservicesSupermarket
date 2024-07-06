const express = require('express');
const bodyParser = require('body-parser');
const clientsRouter = require('./clients-router');

const app = express();
app.use(bodyParser.json());

app.use('/api', clientsRouter);

app.listen(3005, () => {
    console.log('Clients Listing Service running on port 3005');
    console.log('http://localhost:3005/api/clients/');
});