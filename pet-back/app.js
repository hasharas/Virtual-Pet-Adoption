import express from 'express';
import cors from 'cors';
import petRoutes from './routes/petRoutes.js';


const app = express();

app.use(cors());
app.use(express.json());
app.use('/pets', petRoutes);

export default app;
