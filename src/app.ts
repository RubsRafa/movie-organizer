import 'express-async-errors';
import express, { json } from 'express';
import cors from 'cors';
import 'dotenv/config'
import routes from './routes/index.js';
import { handleErrors } from './middlewares/errorsMiddlewares.js';

const app = express();
app.use(cors());
app.use(json());
app.use(routes)
app.use(handleErrors)

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server running on port ${port}`))

export default app;