// db/config.ts
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Function to handle Sequelize errors
const dbConnection = async () => {
  try {
    await sequelize.sync();
    console.log('Database synchronized successfully.');
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Error with Sequelize:', error);
  }
};

export { sequelize, dbConnection };
