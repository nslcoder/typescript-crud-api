import { Request, Response, Router } from 'express';

export const router = Router();

interface Post {
  id: number;
  title: string;
  description: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: 'Post 1',
    description: 'This is longer text',
  },
  {
    id: 2,
    title: 'Another Post',
    description: 'Random text comes here',
  },
];

router.get('/', (req: Request, res: Response): void => {
  res.send(posts);
});

router.get('/:id', (req: Request, res: Response): void => {
  const { id } = req.params;
  res.send(posts[Number(id) - 1]);
});
