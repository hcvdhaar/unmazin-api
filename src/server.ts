import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { UserRouter } from './domains/user';
import { BookmarkRouter } from './domains/bookmarks';
import {
  registerHandler,
  loginHandler,
  protectRoute,
} from './modules/authentication';
import { errorHandler } from './middleware/error-handler';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// TODO: check if is used at some point
app.use(express.static('public'));

app.use(morgan('dev')); // logging

app.post('/register', registerHandler);
app.post('/login', loginHandler);

// NOTE: the error handler is now part of the api route, should it be a global middleware?
// Also for the other routes like /register and /login??
app.use('/api', protectRoute, [UserRouter, BookmarkRouter], errorHandler);

export default app;
