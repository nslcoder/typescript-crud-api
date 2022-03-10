import { Request, Response, Router } from 'express';
import Post from '../models/post';
export const router = Router();

/* interface Post {
  id: number;
  title: string;
  description: string;
} */

// Get all posts
router.get('/', async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({});
    res.status(200).send(posts);
  } catch (error) {
    console.log(error);
  }
});

// Get a post
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.status(200).send(post);
  } catch (error) {
    console.log(error);
  }
});

// Create a post
router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    await Post.create({ title, description });
    res.status(201).send({ message: 'Post is created' });
  } catch (error) {
    console.log(error);
  }
});

// Update a post
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    await Post.findByIdAndUpdate(id, { title, description });
    res.status(200).send({ message: 'Post is updated' });
  } catch (error) {
    console.log(error);
  }
});

// Delete a post
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndDelete(id);
    res.status(200).send({ message: 'Post is deleted' });
  } catch (error) {
    console.log(error);
  }
});
