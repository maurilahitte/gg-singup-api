import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken'
import { jwtConfig } from './jwt.config'

const { TokenExpiredError } = jwt;

const catchError = (err: unknown, res: Response) => {
    if (err instanceof TokenExpiredError) {
      return res.status(401).send({ message: "Unauthorized! Access Token was expired!" });
    }
  
    return res.sendStatus(401).send({ message: "Unauthorized!" });
  }
  
export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {      
      const token = req.headers.authorization.split(' ')[1];
  
      jwt.verify(token, jwtConfig.secret, (err, decoded) => {
        if (err) {
          return catchError(err, res);
        }
        next();
      });
    } else {
      return res.status(403).send({ message: "No token provided!" });
    }
    
  };