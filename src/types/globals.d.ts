export type Tag = {
  id: string;
  name: string;
};

type Author = {
  id: string;
  name: string;
  image: string;
};

export type Question = {
  id: string;
  title: string;
  description: string;
  tags: Tag[];
  author: Author;
  upvotes: number;
  answers: number;
  views: number;
  createdAt: Date;
};
