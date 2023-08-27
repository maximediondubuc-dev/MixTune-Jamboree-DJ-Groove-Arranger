import express, { Router } from 'express';
import cors from 'cors'
import {helloRouter} from './routes/spotifyTokenRoutes'

export function app() {
    const api = express();
    api.use(cors())
    
    api.use('/api/', helloRouter);

    return api;
}