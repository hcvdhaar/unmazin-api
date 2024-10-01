import { Request, Response } from 'express';
import { BookmarkService } from './service';
import { asyncHandler } from '../../utils/async-handler';

export const getBookmark = asyncHandler(async (req: Request, res: Response) => {
  const bookmarks = await BookmarkService.getBookmarks();
  res.status(200).send(bookmarks);
}, 'Could not get bookmarks');

export const getBookmarkById = asyncHandler(
  async (req: Request, res: Response) => {
    const bookmark = await BookmarkService.getBookmarkById(req.params.id);
    res.send(bookmark);
  },
  'Could not get bookmark with provided id'
);

export const createBookmark = asyncHandler(
  async (req: Request, res: Response) => {
    const bookmark = await BookmarkService.createBookmark(req.body);
    res.json(bookmark);
  },
  'Could not create bookmark'
);

export const updateBookmark = asyncHandler(
  async (req: Request, res: Response) => {
    const data = { ...req.body, id: req.params.id };
    const bookmark = await BookmarkService.updateBookmark(data);
    res.send(bookmark);
  },
  'Could not update bookmark'
);

export const deleteBookmark = asyncHandler(
  async (req: Request, res: Response) => {
    const message = await BookmarkService.deleteBookmark(req.params.id);
    res.send(message);
  },
  'Could not delete bookmark'
);
