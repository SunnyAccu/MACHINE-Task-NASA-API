# APOD (Astronomy Picture of the Day) Express js & TypeScript Project

This project fetches the Astronomy Picture of the Day (APOD) from NASA's API and stores it in a PostgreSQL database using Sequelize.

## Prerequisites

Before running the project, ensure you have the following:

- [Node.js](https://nodejs.org/) installed
- [PostgreSQL](https://www.postgresql.org/) installed and a database created
- [NASA API Key](https://api.nasa.gov/) obtained

Obtaining NASA API Key
To obtain a NASA API key, follow these steps:

Visit NASA API Key Signup and sign up for an account by using this link https://api.nasa.gov/.

Once registered, you will receive an API key. Add this key to your .env file.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/SunnyAccu/MACHINE-Task-NASA-API.git
   ```

(i) Navigate to the project directory:

cd MACHINE-Task-NASA-API

(ii) Install dependencies:

npm install

(iii) Create a .env file in the project root and add the following:

PORT=3000
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
DB_NAME=apod_db
API_KEY=your_nasa_api_key

(iv) Set up the PostgreSQL database.

(v) Run the project:

npm start
