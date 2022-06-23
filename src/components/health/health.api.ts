import { Router } from 'express';
import { handlerHealthCheck } from './health.handlers';

const router = Router();

/**
 * @openapi
 * /:
 *   get:
 *     description: This service provides the information that the api is active
 *     tags:
 *      - Health
 *     responses:
 *       200:
 *         description: The api is running is successfull!
 */

router.get('/', handlerHealthCheck);

export default router;
