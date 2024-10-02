import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getUser,
  getUserById,
  updateUser,
} from './handlers';
import { schemaValidator } from '../../middleware/schema-validator';
import { userCreateSchema } from './schema-validator';

// TODO: Check if this endpoint is usefull
const router = Router();

router.use((req, res, next) => {
  // TODO: Add role based access control here
  if (req.path === '/user' && req.method === 'GET') {
    console.log('Only admin and other roles can request all users');
  }

  next();
});

router.get('/user', getUser);

router.get('/user/:id', getUserById);

router.post('/user', schemaValidator(userCreateSchema), createUser);

router.put('/user/:id', updateUser);

router.delete('/user/:id', deleteUser);

export default router;
