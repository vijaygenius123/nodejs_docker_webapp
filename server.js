'use strict';

const express = require('express');

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || '127.0.0.1';

const app = express();

app.get('/', async (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, HOST)

console.log(`Running on http://${HOST}:${PORT}`)