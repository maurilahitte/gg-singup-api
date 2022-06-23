import { Application, json } from 'express';
import corsMiddleware from './cors';
import errorMiddleware from './error';
import loggingMiddleware from './logging';
import notFoundMiddleware from './notFound';
import routesMiddleware from './routes';
import applySwagger from './swagger';

export default (app: Application): void => {
    //Documentation
    process.env.NODE_ENV !== 'production' && applySwagger(app);
    app.use(corsMiddleware);
    app.use(loggingMiddleware());
    app.use(json());
    app.use(routesMiddleware);
    app.use(notFoundMiddleware);
    app.use(errorMiddleware);
};
