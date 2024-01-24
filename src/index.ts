
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { sequelize } from './db/config';
import apodRouter from './router/apodRouter';

const app = express();
const PORT = process.env.PORT;

app.use('/apod', apodRouter);


sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});



