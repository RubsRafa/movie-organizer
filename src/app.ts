import 'express-async-errors';
import express, { json } from 'express';
import cors from 'cors';
import 'dotenv/config'

const app = express();
app.use(cors());
app.use(json());

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server running on port ${port}`))