import { NextFunction, Request, Response } from 'express';
import { HttpRequestError} from '../../utils/httpRequestError';

export default (
    err: HttpRequestError,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const message = 'Something went wrong';
    
    res.status(err.httpCode || 500).json(err.message || message);
};
