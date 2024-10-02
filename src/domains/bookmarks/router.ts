import { Router } from 'express';
import {
  createBookmark,
  deleteBookmark,
  getBookmark,
  getBookmarkById,
  updateBookmark,
} from './handlers';
import { bookmarkCreateSchema, bookmarkUpdateSchema } from './schema-validator';
import { schemaValidator } from '../../middleware/schema-validator';

const router = Router();

router.get('/bookmark', getBookmark);

router.get('/bookmark/:id', getBookmarkById);

router.post('/bookmark', schemaValidator(bookmarkCreateSchema), createBookmark);

router.put(
  '/bookmark/:id',
  schemaValidator(bookmarkUpdateSchema),
  updateBookmark
);

router.delete('/bookmark/:id', deleteBookmark);

export default router;
