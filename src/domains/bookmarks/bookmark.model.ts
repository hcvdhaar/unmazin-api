export const BookmarkType = {
  ARTICLE: 'ARTICLE',
  VIDEO: 'VIDEO',
  UNKNOWN: 'UNKNOWN',
  AUDIO: 'AUDIO',
} as const;

export type BookmarkType = (typeof BookmarkType)[keyof typeof BookmarkType];

export interface Bookmark {
  id: number;
  url: string;
  title: string;
  description: string;
  userId: number;
  image?: string | null;
  type: BookmarkType;
  createAt: Date;
  updatedAt: Date;
}

export interface BookmarkRequestCreateDto {
  url: string;
  title: string;
  description: string;
  image: string;
  type: BookmarkType;
  userId: number;
}

export interface BookmarkRequestUpdateDto extends BookmarkRequestCreateDto {
  id: string;
}

export interface BookmarkResponseDto {
  id: number;
  url: string;
  title: string;
  description: string;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
  type: BookmarkType;
}

export interface BookmarkDeleteDto {
  message: string;
}
