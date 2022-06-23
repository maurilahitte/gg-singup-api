import express from 'express';
import applyMiddlewares from './middlewares';

const app = express();
// app.set('trust-proxy',true);

// Middlewares
applyMiddlewares(app);

export default app;
