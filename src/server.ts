import express from 'express';
import { UserRouter } from './modules/user';
import cors from 'cors';
import morgan from 'morgan';
import { registerHandler, loginHandler } from './modules/authentication';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));

app.use(morgan('dev')); // logging

app.post('/register', registerHandler);
app.post('/login', loginHandler);

// Add some validation here, if the user is authenticated.
app.use('/api', [UserRouter]);

export default app;
