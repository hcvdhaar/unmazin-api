import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getUser,
  getUserById,
  updateUser,
} from './handlers';

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

router.post('/user', createUser);

router.put('/user/:id', updateUser);

router.delete('/user/:id', deleteUser);

export default router;
