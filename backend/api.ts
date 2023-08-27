// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from 'express';
import serverless from 'serverless-http';
import cors from 'cors'

const api = express();
api.use(cors())

const router = Router();
router.get('/hello', (req, res) => res.send('Hello World!'));

api.use('/api/', router);

export const handler = serverless(api);