import { Schema, model } from 'mongoose';

interface Post {
  title: string;
  description: string;
}

const postSchema = new Schema<Post>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<Post>('Post', postSchema);
