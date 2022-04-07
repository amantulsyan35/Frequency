import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'Anime',
    description:
      'a style of Japanese film and television animation, typically aimed at adults as well as children.',
  },
  {
    _id: uuid(),
    categoryName: 'Dark Academia',
    description:
      'Dark academia is a social media aesthetic and subculture concerned with higher education, writing/poetry, the arts, and classic Greek and Gothic architecture. The subculture is associated with ancient art and classic literature.',
  },
  {
    _id: uuid(),
    categoryName: 'Ideas',
    description: 'A thought or suggestion as to a possible course of action.',
  },
  {
    _id: uuid(),
    categoryName: 'Technology',
    description:
      'The application of scientific knowledge for practical purposes, especially in industry.',
  },
  {
    _id: uuid(),
    categoryName: 'Writing',
    description: 'The act of thinking clearly ',
  },
];
