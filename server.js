import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import './src/config/database.js';
import routes from './src/routes/routes.js';

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

// all routes
app.use('/api/amravaan', routes);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});