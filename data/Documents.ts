import { Children } from "react";

const BTS_Doc = [
  {
    id: 1,
    title: 'Albums',
    icon: '📁',
    parentDocument: 1,
  },
  {
    id: 2,
    title: 'Members',
    icon: '📁',
    parentDocument: 1,
  }
];

const Top_Songs = [
  {
    id: 1,
    title: 'BTS',
    icon: '📁',
    parentDocument: 3,
  },
  {
    id: 2,
    title: 'BLACKPINK',
    icon: '📁',
    parentDocument: 3,
  },
];

const Artist_Doc = [
  {
    id: 1,
    title: 'BTS',
    icon: '📁',
    parentDocument: 2,
    children: BTS_Doc
  },
  {
    id: 2,
    title: 'BLACKPINK',
    icon: '📁',
    parentDocument: 2,
  },
];

const K_Pop_doc = [
  {
    id: 1,
    title: 'Artist',
    icon: '📁',
    parentDocument: 1,
    children: Artist_Doc
  },
  {
    id: 2,
    title: 'Genres',
    icon: '📁',
    parentDocument: 1,
    children: null
  },
  {
    id: 3,
    title: 'Top Songs',
    icon: '📁',
    parentDocument: Top_Songs,
  },
];

export const Documents = [
  {
    id: 1,
    title: 'HOME',
    icon: '📄',
    children: {
      id: 2,
      title: 'K-Pop',
      icon: '📂',
      children: K_Pop_doc,
    },
  },
];


  