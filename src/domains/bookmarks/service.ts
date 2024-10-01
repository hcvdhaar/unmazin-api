import { BookmarkType } from '@prisma/client';
import { DataServiceRepository } from './data-service';

export class BookmarkService {
  static async getBookmarks() {
    const bookmarks = await DataServiceRepository.getAll();

    return bookmarks;
  }

  static async getBookmarkById(id: string) {
    const bookmark = await DataServiceRepository.getById(id);

    return bookmark;
  }

  static async createBookmark({
    url,
    title,
    description,
    userId,
    image,
    type,
  }: {
    url: string;
    title: string;
    description: string;
    userId: number;
    image: string;
    type: BookmarkType;
  }) {
    const bookmark = await DataServiceRepository.create({
      url,
      title,
      description,
      userId,
      image,
      type,
    });

    return bookmark;
  }

  static async updateBookmark({
    id,
    url,
    title,
    description,
    image,
    userId,
    type,
  }: {
    id: string;
    url: string;
    title: string;
    description: string;
    image: string;
    userId: number;
    type: BookmarkType;
  }) {
    const bookmark = await DataServiceRepository.update({
      id,
      url,
      title,
      description,
      image,
      userId,
      type,
    });

    return bookmark;
  }

  static async deleteBookmark(id: string) {
    const bookmark = await DataServiceRepository.delete(id);

    return bookmark;
  }
}
