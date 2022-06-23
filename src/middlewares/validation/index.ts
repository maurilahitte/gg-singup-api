import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { getValidationErrors } from '../../utils/validation';

export const validateSchema = (schema: Joi.Schema) => (req: Request, res: Response, next: NextFunction) => {
    const errors = getValidationErrors(schema, req.body);

    if (errors.length) {
        res.status(400).json(errors);
    } else {
        next();
    }
};
