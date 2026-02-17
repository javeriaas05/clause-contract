
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/users.js';
import taskRoutes from './routes/tasks.js';
import { sequelize } from './config/db.js';

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173', // Allow only this origin
    credentials: true // If you need to allow cookies/auth headers
}));
app.use('/api', userRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;
sequelize.sync(
    {
        alter: true
    }
)
    .then(() => {
        console.log('Database synced');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Unable to sync database:', err);
    });
