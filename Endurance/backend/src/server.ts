import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';


import "./database/connection";

import routes from './routes';
import errorHandler from './errors/handler';

const port = process.env.PORT || 3333;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);



app.listen(port, () => console.log(`Listening on port ${port}`));
