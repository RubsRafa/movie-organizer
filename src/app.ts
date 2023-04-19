import 'express-async-errors';
import express, { json } from 'express';
import cors from 'cors';
import 'dotenv/config';
import routes from './routes/index';
import { handleErrors } from './middlewares/errorsMiddlewares';

const app = express();
app.use(cors());
app.use(json());
app.use(routes);
app.use(handleErrors);

export default app;