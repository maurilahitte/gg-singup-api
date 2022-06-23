import Joi from 'joi';

export const getValidationErrors = (schema: Joi.Schema, body: unknown) =>
    schema.validate(body).error?.details.map((detail) => detail.message) || [];
