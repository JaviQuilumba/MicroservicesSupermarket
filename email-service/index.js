const express = require('express');
const emailsRouter = require('./email-router');
const app = express();
const port = 3004;

app.use(express.json());
app.use('/api', emailsRouter);

app.listen(port, () => {
    console.log(`Email microservice running on http://localhost:${port}`);
});
