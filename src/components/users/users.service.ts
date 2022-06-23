import * as dataAccess from './users.data-access-layer';
import { LoggedUser, User } from './users.types';
import { HttpRequestError } from '../../utils/httpRequestError';
import hat from 'hat';
import { compareSync } from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { jwtConfig } from '../../services/jwt/jwt.config';

export const createUser = async (user: Partial<User>): Promise<User> => {
  user.verifyToken = hat();
  user.email = user.email.toLowerCase();
  return await dataAccess.createUser(user);
};

export const login = async (loginData: Partial<User>): Promise<LoggedUser> => {
  const passwordEnteredByUser = loginData.password || '';
  const user = await dataAccess.loginUser(loginData);

  if (user.verified) {
      if (!user.deleted) {
          if (compareSync(passwordEnteredByUser, user.password)) {
              const token = jwt.sign({ id: user._id }, jwtConfig.secret, {
                  expiresIn: jwtConfig.jwtExpiration,
              });
              const response = {
                  userId: user._id,
                  token,
                  tokenExpires: jwtConfig.jwtExpiration
              }
              return response
          } else {
              throw new HttpRequestError('Error', 404, 'Bad credentials');
          }
      } else {
          throw new HttpRequestError('Error', 404, 'User not found, deleted');
      }
  } else {
      throw new HttpRequestError('Error', 500, 'User not verified');
  }

};