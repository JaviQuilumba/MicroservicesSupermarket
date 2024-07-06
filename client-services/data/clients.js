const fs = require('fs');
const path = require('path');
const clientsFilePath = path.join(__dirname, 'clients.json');

const readClients = () => {
    const data = fs.readFileSync(clientsFilePath);
    return JSON.parse(data);
};

module.exports = {
    readClients,
    
};
