import { Router } from 'express';
import { validateSchema } from '../../middlewares/validation';
import {
  createUser,
  login,
} from './users.service';
import {
  PostUserRequest,
} from './users.types';
import {
  userRegisterSchema,
  userLoginSchema,
} from './users.validators';

const router = Router();


router.post(
  '/login',
  validateSchema(userLoginSchema),
  async (req: PostUserRequest, res, next) => {
    try {
      const loggedUser = await login(req.body);
      res.status(200).json(loggedUser);
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  '/register',
  validateSchema(userRegisterSchema),
  async (req: PostUserRequest, res, next) => {
    try {
      await createUser(req.body);
      res.status(201).send();
    } catch (err) {
      next(err);
    }
  }
);


export default router;
