import { Request, Response } from 'express';
import { BookmarkService } from './service';
import { asyncHandler } from '../../utils/async-handler';

export const getBookmark = asyncHandler(async (req: Request, res: Response) => {
  const bookmarks = await BookmarkService.getBookmarks({ userId: req.userId! });
  res.status(200).send(bookmarks);
}, 'Could not get bookmarks');

export const getBookmarkById = asyncHandler(
  async (req: Request, res: Response) => {
    const bookmark = await BookmarkService.getBookmarkById({
      id: req.params.id,
      userId: req.userId!,
    });
    res.send(bookmark);
  },
  'Could not get bookmark with provided id'
);

export const createBookmark = asyncHandler(
  async (req: Request, res: Response) => {
    const bookmark = await BookmarkService.createBookmark({
      ...req.body,
      userId: req.userId!,
    });
    res.json(bookmark);
  },
  'Could not create bookmark'
);

export const updateBookmark = asyncHandler(
  async (req: Request, res: Response) => {
    const params = { ...req.body, id: req.params.id, userId: req.userId! };
    const bookmark = await BookmarkService.updateBookmark(params);
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
