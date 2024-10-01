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

// Add some validation here, if the user is authenticated.
app.use('/api', protectRoute, [UserRouter, BookmarkRouter]);
// NOTE: The order of the middleware is important. The errorHandler should be after the routes.
app.use(errorHandler);

export default app;
