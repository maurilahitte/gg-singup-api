import { NextFunction, Request, Response } from 'express';
import { AppError, handleError } from '../../utils/app-error';

export default (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const message = 'Something went wrong';

    const isOperational = handleError(err as AppError);
    if (!isOperational) {
        next(err);
    } else {
        // The AWS health check will stop the container if many 500 errors are returned
        // That's why we define the 422 (a very uncommon error code) as the default unhandled error status
        res.status(422).json(message);
    }
};
