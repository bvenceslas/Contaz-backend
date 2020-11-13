const express = require('express');

const app = express();
app.use(express.json());

app.use('/api', require('./routes/api'));

port = process.env.PORT || 5000;
app.listen(port, () => console.log('Contaz listens on port: ', port));