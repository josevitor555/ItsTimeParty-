import express from 'express';
import cors from 'cors';
// import dotenv from 'dotenv';

import connection from './db/connection.js';
import router from './routes/router.js';

// dotenv.config();

const app = express();
// const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connection();

// Routes
app.use('/api', router);

app.listen(3000, function () {
  console.log(`Listening on http://localhost:${3000}!`)
});