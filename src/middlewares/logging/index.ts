import { Handler } from 'express';
import morgan from 'morgan';
import logger from '../../utils/logger';

export default (): Handler =>
    morgan('tiny', {
        stream: {
            write: (msg) => logger.debug(msg),
        },
    });
