import prisma from '../../modules/db';
import {
  BookmarkDeleteDto,
  BookmarkRequestCreateDto,
  BookmarkRequestUpdateDto,
  BookmarkResponseDto,
} from './bookmark.model';

export class DataServiceRepository {
  static async getAll(): Promise<BookmarkResponseDto[] | null> {
    const bookmarks = await prisma.bookmark.findMany({
      select: {
        id: true,
        url: true,
        title: true,
        description: true,
        image: true,
        type: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return bookmarks;
  }

  static async getById(id: string): Promise<BookmarkResponseDto | null> {
    const bookmark = await prisma.bookmark.findUnique({
      where: {
        id: +id,
      },
      select: {
        id: true,
        url: true,
        title: true,
        description: true,
        image: true,
        type: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return bookmark;
  }

  static async create({
    url,
    title,
    description,
    image,
    type,
    userId,
  }: BookmarkRequestCreateDto): Promise<BookmarkResponseDto | null> {
    const bookmark = await prisma.bookmark.create({
      data: {
        url,
        title,
        description,
        image,
        type,
        userId,
      },
      select: {
        id: true,
        url: true,
        title: true,
        description: true,
        image: true,
        type: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return bookmark;
  }

  static async update({
    id,
    url,
    title,
    description,
    image,
    userId,
    type,
  }: BookmarkRequestUpdateDto): Promise<BookmarkResponseDto | null> {
    const updateUser = await prisma.bookmark.update({
      where: {
        id: +id,
      },
      data: {
        url,
        title,
        description,
        image,
        userId,
        type,
      },
      select: {
        id: true,
        url: true,
        title: true,
        description: true,
        image: true,
        type: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return updateUser;
  }

  static async delete(id: string): Promise<BookmarkDeleteDto> {
    await prisma.bookmark.delete({
      where: {
        id: +id,
      },
    });

    return {
      message: 'Bookmark deleted successfully',
    };
  }
}
