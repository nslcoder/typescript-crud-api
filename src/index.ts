import 'dotenv/config';
import express, { Request, Response, Application } from 'express';
import { router } from './routes/index';
import { connectDB } from './config/db';

const app: Application = express();

const port: string | number = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use('/api/posts', router);

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello from the TypeScript Express server');
});

app.listen(port, () => {
  console.log(`The sever is listening at port ${port}`);
});
