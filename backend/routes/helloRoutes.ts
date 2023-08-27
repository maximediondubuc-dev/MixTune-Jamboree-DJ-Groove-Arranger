
import {getHello} from '../controllers/helloController'

export const helloRouter = createRouter();

function createRouter() {
    const { Router } = require('express');

    // Initialization
    const router = Router();

    // Requests 
    router.get('/hello', getHello);
    return router;
}
