import express, { Request, Response, Application } from 'express';
import { router } from './routes/index';
const app: Application = express();

const port: number = Number(process.env.PORT) || 5000;

app.use(express.json());
app.use('/api/posts', router);

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello from the TypeScript Express server');
});

app.listen(port, () => {
  console.log(`The sever is listening at port ${port}`);
});
