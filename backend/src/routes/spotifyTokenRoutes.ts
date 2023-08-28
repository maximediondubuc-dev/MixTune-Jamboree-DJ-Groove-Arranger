
import {getToken} from '../controllers/spotifyTokenController'

export const spotifyTokenRouter = createRouter();

function createRouter() {
    const { Router } = require('express');

    // Initialization
    const router = Router();

    // Requests 
    router.get('/spotify/token', getToken);
    return router;
}
