import express from 'express';
import dbConnection from './database/index.js';
import config from './config/index.js';

const app = express()

dbConnection();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(config.port, () => {
  console.log(`Backend server listening on port: ${config.port}`)
})