import Joi from 'joi';

export const userLoginSchema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ar'] } }).required(),
    password: Joi.string().required(),
});

export const userRegisterSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ar'] } }).required(),
    password: Joi.string().required(),    
});