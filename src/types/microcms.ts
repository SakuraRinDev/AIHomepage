export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  };
};

export type BlogResponse = {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
}; 