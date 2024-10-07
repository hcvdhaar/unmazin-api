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
import { schemaValidator } from './middleware/schema-validator';
import {
  logingSchema,
  registerSchema,
} from './modules/authentication/schema-validator';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// TODO: check if is used at some point
app.use(express.static('public'));

app.use(morgan('dev')); // logging

app.post('/register', schemaValidator(registerSchema), registerHandler);
app.post('/login', schemaValidator(logingSchema), loginHandler);
app.use('/api', protectRoute, [UserRouter, BookmarkRouter]);

// Since all the routes are wrapped in the asyncHanlder, which catches all the errors and propagates
// them to the error handler, we can remove the error handler from the routes
app.use(errorHandler);

export default app;
