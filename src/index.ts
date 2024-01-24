// index.ts
import express from 'express';
import {dbConnection } from './db/config';
import apodRouter from './router/apodRouter';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/apod', apodRouter);

dbConnection()

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
})
