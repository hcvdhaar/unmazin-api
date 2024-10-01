import { Router } from 'express';
import {
  createBookmark,
  deleteBookmark,
  getBookmark,
  getBookmarkById,
  updateBookmark,
} from './handlers';

const router = Router();

router.get('/bookmark', getBookmark);

router.get('/bookmark/:id', getBookmarkById);

router.post('/bookmark', createBookmark);

router.put('/bookmark/:id', updateBookmark);

router.delete('/bookmark/:id', deleteBookmark);

export default router;
