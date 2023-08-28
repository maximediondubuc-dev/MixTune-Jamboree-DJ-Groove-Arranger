import express, { Router } from 'express';
import cors from 'cors'
import {spotifyTokenRouter} from './routes/spotifyTokenRoutes'

export function app() {
    const api = express();
    api.use(cors())
    
    api.use('/api/', spotifyTokenRouter);

    return api;
}